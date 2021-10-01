import mongoose from "mongoose";
import logger from "../logger";
import config from "../../config";

const connectDatabase = async () => {
  try {
    const CONNECTION = await mongoose.connect(config.database.mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });

    logger.info(`DB is CONNECTED ${CONNECTION.connection.host}`);
  } catch (err) {
    logger.error(`Error at Database connection\n ${err}`);
  }
};

export default connectDatabase;
