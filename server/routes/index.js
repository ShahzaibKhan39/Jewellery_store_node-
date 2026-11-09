import express from "express";
import productRouter from "./products.routes.js";
import productQueryRouter from "./productQueries.routes.js";
import contactRouter from "./contact.routes.js";

const router = express.Router();

router.use("/products", productRouter);
router.use("/product-queries", productQueryRouter);
router.use("/contact", contactRouter);

export default router;