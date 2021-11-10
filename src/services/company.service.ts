import CompanyRepo from "../repository/Company";
import UserService from "./user.service";
import { IUser } from "../models/interfaces";

class CompanyService {
  async findAll() {
    return await CompanyRepo.getCompanyList();
  }
  async findById() {}

  async create(user: IUser, body: any) {
    const company = { ...body, users: [user._id] };
    const newCompany = await CompanyRepo.createNewCompany(company);
    await UserService.addCompany(user, newCompany._id);
    return newCompany;
  }
}

export default new CompanyService();
