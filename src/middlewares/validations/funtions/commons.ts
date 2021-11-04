import { Request as Req, Response as Res, NextFunction as Next } from "express";
import { check, validationResult } from "express-validator";
import { ErrorResponse } from "../../../helpers/ErrorResponse";
import { emailIsUniqueValidator, usernameIsUniqueValidator } from "./custom";
export const nameValidator = check("name")
  .isLength({ max: 50 })
  .withMessage("Name max length is 50 characaters");
export const usernameValidator = check("username")
  .notEmpty()
  .withMessage("Username is required")
  .isLength({ min: 6, max: 12 })
  .withMessage("Username must be between 6 and 12 characters")
  .isLowercase()
  .withMessage('"Uppercase is not allowed"')
  .matches(/^[a-z0-9]{0,16}$/)
  .withMessage("Only lowercase letter and numbers are allowed")
  .custom(usernameIsUniqueValidator)
  .withMessage("Username is already taken");
export const passwordRequired = check("password")
  .notEmpty()
  .withMessage("Password is required");
export const passwordLength = check("password")
  .isLength({ min: 6 })
  .withMessage("Password length must be at least 6 characters");
export const emailValidator = check("email")
  .notEmpty()
  .withMessage("Email is required")
  .isEmail()
  .withMessage("Email is invalid");
export const emailUnique = check("email")
  .custom(emailIsUniqueValidator)
  .withMessage("Email is already taken");
export const validResult = (req: Req, res: Res, next: Next) => {
  const err = validationResult(req);
  if (!err.isEmpty()) {
    throw new ErrorResponse(
      400,
      "Validation Error",
      err.array().map(e => e.msg)
    );
  }
  next();
};
