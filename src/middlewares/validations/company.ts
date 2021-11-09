import { check } from "express-validator";
import { validResult } from "./funtions/commons";
import { validateJWT, companyNameIsUniqueValidator } from "./funtions/custom";

const nameIsUnique = check("name")
  .notEmpty()
  .withMessage("The name of the company is required")
  .custom(companyNameIsUniqueValidator)
  .withMessage("The comapny name already exist");

export const getCompaniesValidator = [validateJWT, validResult];
export const postCompanyValidation = [validateJWT, nameIsUnique, validResult];
