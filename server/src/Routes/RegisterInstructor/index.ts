import { ServerRoute } from "@hapi/hapi";
import { Boom } from "@hapi/boom";
import Joi from "joi";
import { errorMessage } from "../index";
import { db } from "../../database/connection";
import convertHourToMinutes from "../../utils/convertHoursToMinutes";

interface ScheduleItem {
  week_day: Number;
  to: Number;
  from: Number;
}

export const RegisterInstructor: ServerRoute = {
  method: "POST",
  path: "/courses",
  options: {
    validate: {
      payload: Joi.object({
        name: Joi.string().min(1).max(250),
        avatar: Joi.string(),
        whatsapp: Joi.string().min(8),
        bio: Joi.string(),
        subject: Joi.string().min(3),
        cost: Joi.number().positive(),
      }),
    },
  },
  handler: async function (request, h) {
    request.log("error", errorMessage);

    try {
      // console.table(request.payload);

      const trx = await db.transaction();

      const {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule,
      } = JSON.parse(request.payload);

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
          class_id: insertedCourseId,
          week_day: item.week_day,
          from: convertHourToMinutes(item.from),
          to: convertHourToMinutes(item.to),
        };
      });

      await trx("courses_schedule").insert(coursesSchedule);

      await trx.commit();

      return h.response("Instructor registered.").statusCode;
    } catch {
      return new Boom();
    }
  },
};

export default RegisterInstructor;
