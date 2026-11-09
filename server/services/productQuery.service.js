import db from "../models/index.js";
import httpError from "../utils/httpError.js";

const { Product, ProductQuery } = db;

const productQueryService = {
  // Save a query for a product
  createProductQuery: async ({ product_id, name, email, message }) => {
    // The product must exist, otherwise reject with 400
    const product = await Product.findByPk(product_id);
    if (!product) {
      throw httpError(400, "Product not found for the given product_id");
    }

    const query = await ProductQuery.create({
      product_id,
      name,
      email,
      message,
    });

    return query;
  },
};

export default productQueryService;