import { ServerRoute } from "@hapi/hapi";
import { RegisterInstructor } from "./RegisterInstructor";

export const errorMessage = "An error has ocurried. Please try again later.";

export const Routes: ServerRoute[] = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      request.log("error", errorMessage);
      return h.response("Hello World!");
    },
  },

  RegisterInstructor,

  {
    method: "*",
    path: "/{any*}",
    handler: function (request, h) {
      return "404 Error! Page Not Found!";
    },
  },
];

export default Routes;
