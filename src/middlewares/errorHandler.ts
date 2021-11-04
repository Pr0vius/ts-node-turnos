import { Request, Response, NextFunction } from "express";
import logger from "../loaders/logger";
import { ErrorResponse } from "../helpers/ErrorResponse";

export const errorHandler = (
  err: ErrorResponse,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const code = err.code || 500;
  logger.error(`${code} - ${err.message} - ${req.originalUrl} - ${req.ip}`.red);
  logger.error(`${err.stack}`);
  res.status(code).json({
    code,
    message: err.message,
    data: err.data,
  });
};
