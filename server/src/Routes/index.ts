import { ServerRoute } from "@hapi/hapi";
import { RegisterInstructor } from "../controllers/RegisterInstructorController";

export const errorMessage = "An error has ocurried. Please try again later.";

export const Routes: ServerRoute[] = [
  RegisterInstructor,

  {
    method: "*",
    path: "/{any*}",
    handler: function (request, h) {
      return h
        .response()
        .message("Error: Resource not found.")
        .code(404)
        .type("application/json");
    },
  },
];

export default Routes;
