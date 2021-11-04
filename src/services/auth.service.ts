import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config";
import { IUser, IUserLogin } from "../models/interfaces";
import userRepo from "../repository/User";

export class AuthService {
  private encrypt(id: string | number) {
    return jwt.sign({ id }, config.jwt.secret, {
      expiresIn: config.jwt.expires,
    });
  }
  async singUp(user: IUser) {
    user.password = await bcrypt.hash(user.password, 10);
    return await userRepo.createUser(user);
  }
  async singIn({ email, password }: IUserLogin) {
    return await userRepo.findUser({ email, password });
  }
}
export default new AuthService();
