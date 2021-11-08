import { validResult } from "./funtions/commons";
import { validateJWT } from "./funtions/custom";

export const getCompaniesValidator = [validateJWT, validResult];
