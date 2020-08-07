import { ServerRoute } from "@hapi/hapi";
import Boom from "@hapi/boom";
import Joi from "joi";
import { db } from "../../database/connection";

interface ConnectionInput {
  instructor_id: number;
}

export const RegisterConnection: ServerRoute = {
  path: "/courses/connections",
  method: "POST",
  options: {
    validate: {
      failAction: "error",
      payload: Joi.object({
        instructor_id: Joi.number().required().positive(),
      }),
    },
  },
  handler: async function (request, h) {
    try {
      const { instructor_id } = request.payload as ConnectionInput;

      await db("connections").insert({
        instructor_id,
      });

      return h.response().code(201);
    } catch (error) {
      /** DEBUG */
      console.error(error);

      throw Boom.badRequest();
    }
  },
};
