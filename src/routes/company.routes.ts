import { Router } from "express";
import { getAllCompanies } from "../controllers/company.controllers";
import { getCompaniesValidator } from "../middlewares/validations/company";
const router = Router();

router.get("/", getCompaniesValidator, getAllCompanies);

export default router;
