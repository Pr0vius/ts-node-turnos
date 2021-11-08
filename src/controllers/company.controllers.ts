import { Request as Req, Response as Res, NextFunction as Next } from "express";
import { ErrorResponse } from "../helpers/ErrorResponse";
import { SuccessResponse as Success } from "../helpers/SuccessResponse";

export const getAllCompanies = async (req: Req, res: Res, next: Next) => {
  try {
    console.log(req.user);
    res.status(200).json(new Success(200, "Nice"));
  } catch (err: any) {
    throw new ErrorResponse(
      err.code || 500,
      err.message || "Couldn't get company list",
      err.data || "Something went wrong"
    );
  }
};
