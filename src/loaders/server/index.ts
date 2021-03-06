import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import "colors";
import { errorHandler } from "../../middlewares/errorHandler";
import config from "../../config";
import logger from "../logger";
import isAliveRoutes from "../../routes/isAlive.routes";
import authRoutes from "../../routes/auth.routes";
import companyRoutes from "../../routes/company.routes";

export class ExpressServer {
  public app: Application;
  private prefix: string;
  private port: string | number;

  constructor() {
    this.prefix = config.prefix;
    this.port = config.port;
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
    this.errorHandler();
  }
  private settings() {
    this.app.set("port", this.port);
  }
  private middlewares() {
    this.app.use(express.json());
    config.env == "development" ? this.app.use(morgan("dev")) : null;
    this.app.use(cors());
  }
  private routes() {
    this.app.use(`${this.prefix}`, authRoutes);
    this.app.use(`${this.prefix}`, isAliveRoutes);
    this.app.use(`${this.prefix}/company`, companyRoutes);
  }
  private errorHandler() {
    this.app.use(errorHandler);
  }
  public start(): void {
    try {
      this.app.listen(this.app.get("port"));
    } catch (err) {
      logger.error(`${err}`.red);
      process.abort();
    }
  }
}

export default new ExpressServer();
