import { Request as Req, Response as Res, NextFunction as Next } from "express";
import { ErrorResponse } from "../helpers/ErrorResponse";
import { SuccessResponse as Success } from "../helpers/SuccessResponse";
import { AuthService } from "../services/auth.service";
const Auth = new AuthService();

export const login = async (req: Req, res: Res, next: Next) => {
  try {
    const user = await Auth.singIn();
    res.json(new Success(200, user));
  } catch (err) {
    next(new ErrorResponse(500, "Login't", "no se pudo logear"));
  }
};

export const register = async (req: Req, res: Res, next: Next) => {
  try {
    const body = {};
    const user = await Auth.singUp(body);
    res.json(new Success(201, user));
  } catch (err) {
    next(new ErrorResponse( 500, "Registern't", "no se pudo registrar"));
  }
};
