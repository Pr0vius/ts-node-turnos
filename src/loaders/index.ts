import  server from "./server";
import config from "../config";
import logger from "./logger";
import "colors";
import connectDatabase from "./database";

export default async () => {

  server.start();
  logger.info(
    `#####################################\n	Server is listening on PORT: ${config.port}\n      #####################################`
      .cyan
  );
  await connectDatabase();
};
