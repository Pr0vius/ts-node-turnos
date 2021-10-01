import dotenv from "dotenv";

let LOGGING: boolean;
let mongoURI: string | undefined;

dotenv.config();
process.env.NODE_ENV = process.env.NODE_ENV || "development";
switch (process.env.NODE_ENV) {
  case "development":
    mongoURI = process.env.MONGO_DEV;
    LOGGING = false;
    break;

  case "production":
    mongoURI = process.env.MONGODB_URI;
    LOGGING = true;
    break;

  case "test":
    mongoURI = process.env.MONGO_TEST;
    LOGGING = false;
    break;
}

export default {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV,
  prefix: "/api/v1",
  log: {
    level: process.env.LOG_LEVEL || "silly",
  },
  jwt: {
    secret: process.env.JWT_SECRET || "secret",
    expires: process.env.JWT_EXPIRES || "1d",
  },
  database: {
    mongodbURL: mongoURI || "mongodb://127.0.0.1:27017/myapp",
  },
};
