import { ErrorResponse } from "../../../helpers/ErrorResponse";
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
