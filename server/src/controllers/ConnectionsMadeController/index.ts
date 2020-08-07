import { ServerRoute } from "@hapi/hapi";
import Boom from "@hapi/boom";
import { db } from "../../database/connection";

export const CountConnections: ServerRoute = {
  path: "/courses/connections",
  method: "GET",

  handler: async function (request, h) {
    try {
      const [connections] = await db("connections").count("* as total");

      return h.response({ connections }).code(200);
    } catch (error) {
      /** DEBUG */
      console.error(error);

      throw Boom.internal();
    }
  },
};
