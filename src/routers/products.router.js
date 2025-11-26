import express from "express";
import {
  addProduct,
  deleteProduct,
  detailProduct,
  listProducts,
  updateProduct,
  uploadProductImage,
} from "../controllers/products.controller.js";

const router = express();

router.get("/products", listProducts);
router.get("/products/:id", detailProduct);
router.post("/products", addProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.post("/products/:id/image", uploadProductImage);

export default router;
