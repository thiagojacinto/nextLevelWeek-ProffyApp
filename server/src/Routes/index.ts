import { ServerRoute } from "@hapi/hapi";
import { RegisterInstructor } from "../controllers/RegisterInstructorController";
import { ListCourses } from "../controllers/ListCoursesController";
import Boom, { notFound } from "@hapi/boom";

export const errorMessage = "An error has ocurried. Please try again later.";

export const Routes: ServerRoute[] = [
  RegisterInstructor,
  ListCourses,

  {
    method: "*",
    path: "/{any*}",
    handler: function (request, h) {
      throw Boom.notFound("Resource not found. Sorry");
    },
  },
];

export default Routes;
