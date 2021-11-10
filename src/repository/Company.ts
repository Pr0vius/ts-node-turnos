import Company from "../models/CompanySchema";
import { ICompany } from "../models/interfaces";
class CompanyRepository {
  async getCompanyList() {
    return await Company.find();
  }
  async createNewCompany(body: ICompany) {
    return await Company.create(body);
  }
  async findByName(name: string) {
    return await Company.findOne({ name }).populate("users");
  }
  async findById(id: string){
    return await Company.findById(id).populate('users');

  };
}

export default new CompanyRepository();
