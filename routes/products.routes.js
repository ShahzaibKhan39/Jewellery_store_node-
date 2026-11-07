import express from "express";
import productController from "../controllers/product.controller.js";
import upload from "../middleware/upload.middleware.js";

const productRouter = express.Router();

// GET /api/products (optional ?category=Rings)
productRouter.get("/", productController.getProducts);

// GET /api/products/:id
productRouter.get("/:id", productController.getProductById);

// POST /api/products (multipart/form-data, image field name: "image")
productRouter.post("/", upload.single("image"), productController.createProduct);

export default productRouter;