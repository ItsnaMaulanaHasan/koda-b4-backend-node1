import express from "express";
import { body } from "express-validator";
import { login, register } from "../controllers/auth.controller.js";

const router = express();

router.post("/auth/login", login);
router.post(
  "/auth/register",
  body(["email", "password"], "Field is required").notEmpty(),
  body("email", "Is not valid format").isEmail(),
  register
);

export default router;
