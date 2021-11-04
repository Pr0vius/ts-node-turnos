import winston from "winston";
import config from "../../config";
const transports = [];

transports.push(new winston.transports.Console());
if (config.env === "production") {
  transports.push(
    new winston.transports.File({ filename: "Errors.logs", level: "Error" })
  );
}

const logger = winston.createLogger({
  level: config.log.level,
  format: winston.format.simple(),
  transports,
});

export default logger;
