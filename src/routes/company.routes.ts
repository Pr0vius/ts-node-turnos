import { Router } from "express";
import {
  getAllCompanies,
  createCompany,
} from "../controllers/company.controllers";
import {
  getCompaniesValidator,
  postCompanyValidation,
} from "../middlewares/validations/company";
const router = Router();

router
  .route("/")
  .get(getCompaniesValidator, getAllCompanies)
  .post(postCompanyValidation, createCompany);
export default router;
