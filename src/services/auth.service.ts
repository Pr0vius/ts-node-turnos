import { UserRepository } from "../repository/User";
const repository = new UserRepository();

export class AuthService{
  async singUp(body: object){
    return await repository.createUser(body);
  };
  async singIn() {
    return await repository.findUser();
  }
}