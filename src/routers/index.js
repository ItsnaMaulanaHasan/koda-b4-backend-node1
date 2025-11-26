import express, { Router } from "express";
import { join } from "node:path";
import { cwd } from "node:process";
import authRouter from "./auth.router.js";
import productsRouter from "./products.router.js";

const router = Router();

router.use("/", authRouter);
router.use("/", productsRouter);
router.use("/uploads", express.static(join(cwd(), "uploads")));

export default router;
