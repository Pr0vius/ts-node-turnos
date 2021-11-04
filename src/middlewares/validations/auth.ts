import {
  emailUnique,
  emailValidator,
  nameValidator,
  passwordLength,
  passwordRequired,
  usernameValidator,
  validResult,
} from "./funtions/commons";

export const registerValidations = [
  nameValidator,
  usernameValidator,
  passwordRequired,
  passwordLength,
  emailValidator,
  emailUnique,
  validResult,
];
export const logInValidation = [emailValidator, passwordRequired, validResult];
