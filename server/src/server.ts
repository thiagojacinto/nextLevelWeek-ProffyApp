import Hapi from "@hapi/hapi";
import Joi from "joi";

const { port, host } = require("./config");
import Routes from "./Routes";

const init = async () => {
  const server = Hapi.server({
    port: port,
    host: host,
  });

  server.validator(Joi);

  server.route(Routes);

  await server.start();
  console.log("Server running on %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

init();
