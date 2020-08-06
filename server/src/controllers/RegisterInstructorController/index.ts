import { ServerRoute } from "@hapi/hapi";
import Boom from "@hapi/boom";
import Joi from "joi";
import { errorMessage } from "../../Routes/index";
import { db } from "../../database/connection";
import convertHourToMinutes from "../../utils/convertHoursToMinutes";

interface ScheduleItem {
  week_day: Number;
  to: string;
  from: string;
}

interface InstructorInput {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: Number;
  schedule: Array<ScheduleItem>;
}

const scheduleItemForValidation: Joi.ObjectSchema = Joi.object().keys({
  week_day: Joi.number().required().min(0).max(7),
  to: Joi.string().required(),
  from: Joi.string().required(),
});

export const RegisterInstructor: ServerRoute = {
  method: "POST",
  path: "/courses",
  options: {
    validate: {
      failAction: "error",
      payload: Joi.object({
        name: Joi.string().min(1).max(250),
        avatar: Joi.string(),
        whatsapp: Joi.string().min(8),
        bio: Joi.string(),
        subject: Joi.string().min(3),
        cost: Joi.number().positive().min(30),
        schedule: Joi.array().items(scheduleItemForValidation),
      }),
    },
  },
  handler: async function (request, h) {
    request.log("error", errorMessage);

    try {
      const trx = await db.transaction();

      const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule,
      } = request.payload as InstructorInput;

      const [insertedInstructorsId] = await trx("instructors").insert({
        name,
        avatar,
        whatsapp,
        bio,
      });

      const [insertedCourseId] = await trx("courses").insert({
        subject,
        cost,
        instructor_id: insertedInstructorsId,
      });

      const coursesSchedule = schedule.map((item) => {
        return {
          course_id: insertedCourseId,
          week_day: item.week_day,
          from: convertHourToMinutes(item.from),
          to: convertHourToMinutes(item.to),
        };
      });

      await trx("courses_schedule").insert(coursesSchedule);

      await trx.commit();

      return h
        .response()
        .code(201)
        .message("Instructor registered.")
        .header("content-type", "application/json");
    } catch (err) {
      console.error(err);
      throw Boom.badRequest();
    }
  },
};

export default RegisterInstructor;
