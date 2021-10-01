import winston from "winston";
import config from "../../config";
const transports = [];

transports.push(new winston.transports.Console());

const logger = winston.createLogger({
  level: config.log.level,
  format: winston.format.simple(),
  transports,
});

export default logger;