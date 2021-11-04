import { Router } from "express";
import { login, register } from "../controllers/auth.controllers";
import { registerValidations } from "../middlewares/validations/auth";
const router = Router();

router.post("/login", login);
router.post("/register", registerValidations, register);

export default router;
