import express from "express";
import productQueryController from "../controllers/productQuery.controller.js";

const productQueryRouter = express.Router();

// POST /api/product-queries
productQueryRouter.post("/", productQueryController.createProductQuery);

export default productQueryRouter;