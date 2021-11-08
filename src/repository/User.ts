import { IUser, IUserLogin } from "../models/interfaces";
import UserSchema from "../models/UserSchema";

class UserRepository {
  async createUser(body: IUser): Promise<IUser | null> {
    return await UserSchema.create(body);
  }
  async findUser(user: IUser | IUserLogin): Promise<IUser | null> {
    return await UserSchema.findOne(user);
  }
  async findUserByUsername(username: string): Promise<IUser | null> {
    return await UserSchema.findOne({ username });
  }
  async findUserByEmail(email: string): Promise<IUser | null> {
    return await UserSchema.findOne({ email });
  }
  async findUserById(id: string) {
    return await UserSchema.findById(id);
  }
}

export default new UserRepository();
