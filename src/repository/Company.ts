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
    return await Company.findOne({ name });
  }
}

export default new CompanyRepository();
