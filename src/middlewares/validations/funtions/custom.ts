import { Request as Req, Response as Res, NextFunction as Next } from "express";
import { ErrorResponse } from "../../../helpers/ErrorResponse";
import AuthService from "../../../services/auth.service";
import userRepo from "../../../repository/User";
/*
  Users
*/
export const usernameIsUniqueValidator = async (username: string) => {
  const userFound = await userRepo.findUserByUsername(username);
  if (userFound) {
    throw new ErrorResponse(400, undefined, "Username already exist");
  }
};
export const emailIsUniqueValidator = async (email: string) => {
  const userFound = await userRepo.findUserByEmail(email);
  if (userFound) {
    throw new ErrorResponse(400, undefined, "Username already exist");
  }
};

/*
  AUTHENTICATE USER
*/

export const validateJWT = async (req: Req, res: Res, next: Next) => {
  try {
    const token = req.header("Authorization");
    const user = await AuthService.validateToken(token);
    req.user = user;
    next();
  } catch (err: any) {
    next(
      new ErrorResponse(
        err.status || 400,
        err.message || "Can't validate the token",
        err.data ||
          "Please provide an authentification token in Authorization header"
      )
    );
  }
};
