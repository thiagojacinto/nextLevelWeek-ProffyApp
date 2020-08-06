import { ServerRoute } from "@hapi/hapi";
import { Boom } from "@hapi/boom";
import Joi from "joi";
import { errorMessage } from "../../Routes/index";
import { db } from "../../database/connection";
import convertHourToMinutes from "../../utils/convertHoursToMinutes";

interface ScheduleItem {
  week_day: Number;
  to: Number;
  from: Number;
}

const scheduleItemForValidation: Joi.ObjectSchema = Joi.object().keys({
  week_day: Joi.number().required(),
  to: Joi.string().required(),
  from: Joi.string().required(),
});

export const RegisterInstructor: ServerRoute = {
  method: "POST",
  path: "/courses",
  options: {
    validate: {
      failAction: "log",
      payload: Joi.object({
        name: Joi.string().min(1).max(250),
        avatar: Joi.string(),
        whatsapp: Joi.string().min(8),
        bio: Joi.string(),
        subject: Joi.string().min(3),
        cost: Joi.number().positive(),
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
      } = request.payload;

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

      const coursesSchedule = schedule.map((item: ScheduleItem) => {
        return {
          course_id: insertedCourseId,
          week_day: item.week_day,
          from: convertHourToMinutes(item.from.toString()),
          to: convertHourToMinutes(item.to.toString()),
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

      return new Boom();
    }
  },
};

export default RegisterInstructor;
