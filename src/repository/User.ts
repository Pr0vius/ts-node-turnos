import UserSchema from "../models/UserSchema";

export class UserRepository {
  async createUser(body: object) {
    return await UserSchema.create(body);
  }
  async findUser() {
    return await UserSchema.findOne();
  }
}
