import { Request as Req, Response as Res, NextFunction as Next } from "express";
import { ErrorResponse } from "../helpers/ErrorResponse";
import { SuccessResponse as Success } from "../helpers/SuccessResponse";
import AuthService from "../services/auth.service";

export const login = async (req: Req, res: Res, next: Next) => {
  try {
    const { email, password } = req.body;
    const user = await AuthService.singIn({ email, password });
    res.json(new Success(200, user));
  } catch (err: any) {
    next(
      new ErrorResponse(
        err.code || 500,
        "Couln't Login",
        err.message || "Something went wrong"
      )
    );
  }
};

export const register = async (req: Req, res: Res, next: Next) => {
  try {
    const { username, name, password, company, email } = req.body;
    const userData = { username, name, password, company, email };
    const user = await AuthService.singUp(userData);
    res.json(new Success(201, user));
  } catch (err: any) {
    next(
      new ErrorResponse(
        err.code || 500,
        "Couln't Register",
        err.message || "Something went wrong"
      )
    );
  }
};
