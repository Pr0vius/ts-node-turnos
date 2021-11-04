import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import config from "../config";
import { IUser, IUserLogin } from "../models/interfaces";
import userRepo from "../repository/User";
import { ErrorResponse } from "../helpers/ErrorResponse";

export class AuthService {
  private encrypt(id: string | number | undefined) {
    return jwt.sign({ id }, config.jwt.secret, {
      expiresIn: config.jwt.expires,
    });
  }
  async singUp(user: IUser) {
    user.password = await bcrypt.hash(user.password, 10);
    const newUser = await userRepo.createUser(user);
    return {
      _id: newUser?._id,
      name: newUser?.name,
      username: newUser?.username,
      email: newUser?.email,
      company: newUser?.company,
    };
  }
  async singIn({ email, password }: IUserLogin) {
    const user = await userRepo.findUserByEmail(email);
    if (!user) {
      throw new ErrorResponse(400, undefined, "Email or password are wrong");
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      throw new ErrorResponse(400, undefined, "Email or password are wrong");
    }
    const token = this.encrypt(user._id);
    return {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      token,
    };
  }
}
export default new AuthService();
