import { ServerRoute } from "@hapi/hapi";
import Boom from "@hapi/boom";
import Joi from "joi";
import { errorMessage } from "../../Routes/index";
import { db } from "../../database/connection";
import { regexTime24h } from "../../utils/regexTime24h";
import convertHourToMinutes from "../../utils/convertHoursToMinutes";

export const ListCourses: ServerRoute = {
  path: "/courses",
  method: "GET",
  options: {
    validate: {
      failAction: "error",
      query: Joi.object({
        subject: Joi.string().required().min(3),
        week_day: Joi.number().required().min(0).max(7),
        time: Joi.string().required().regex(regexTime24h),
      }),
    },
  },
  handler: async function (request, h) {
    request.log("error", errorMessage);
    try {
      const { subject, week_day, time } = request.query;

      const startTime = convertHourToMinutes(time.toString());

      const courses = await db("courses")
        .whereExists(function () {
          this.select("courses_schedule.*")
            .from("courses_schedule")
            .whereRaw("`courses_schedule`.`course_id` = `courses`.`id`")
            .whereRaw("`courses_schedule`.`week_day` = ??", [Number(week_day)])
            .whereRaw("`courses_schedule`.`from` <= ??", [startTime])
            .whereRaw("`courses_schedule`.`to` > ??", [startTime]);
        })
        .where("courses.subject", "=", subject)
        .join("instructors", "courses.instructor_id", "=", "instructors.id")
        .select(["courses.*", "instructors.*"]);

      return h.response({ courses: courses }).code(200).encoding("utf8");
    } catch (error) {
      console.error(error);
      return Boom.internal(error);
    }
  },
};
