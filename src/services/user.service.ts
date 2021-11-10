import UserSchema from "../models/UserSchema";
import { IUser } from "../models/interfaces";

class UserService {
  async addCompany(user: IUser, CompanyId: any) {
    return await UserSchema.findByIdAndUpdate(user._id, {
      ...user,
      company: CompanyId,
    });
  }
}

export default new UserService();
