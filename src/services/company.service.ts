import CompanyRepo from "../repository/Company";

class CompanyService {
  async findAll() {}
  findById() {}

  async create(userID: string, body: any) {
    const company = { ...body, user: [userID] };
    return await CompanyRepo.createNewCompany(company);
  }
}

export default new CompanyService();
