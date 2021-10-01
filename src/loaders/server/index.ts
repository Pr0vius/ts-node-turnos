
import express, { Application, Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import "colors";
import config from "../../config";
import logger from "../logger";
import isAliveRoutes from "../../routes/isAlive.routes";
import { errorHandler } from "../../middlewares/errorHandler";

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
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }
  private routes() {
    this.app.use(`${this.prefix}`, isAliveRoutes);
  }
  private errorHandler() {
    this.app.use(errorHandler);
  }
  start(): void {
    try {
      this.app.listen(this.app.get("port"));
    } catch (err) {
      logger.error(`${err}`.red);
      process.abort();
    }
  }
}

export default new ExpressServer()