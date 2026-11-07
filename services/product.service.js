import db from "../models/index.js";
import { CATEGORIES } from "../models/product.model.js";
import httpError from "../utils/httpError.js";

const { Product } = db;

const productService = {
  // Get all products, optionally filtered by category
  getProducts: async (category) => {
    const where = {};

    if (category) {
      if (!CATEGORIES.includes(category)) {
        throw httpError(
          400,
          `Invalid category. Must be one of: ${CATEGORIES.join(", ")}`
        );
      }
      where.category = category;
    }

    const products = await Product.findAll({
      where,
      order: [
        ["created_at", "DESC"],
        ["id", "DESC"],
      ],
    });

    return products;
  },

  // Get a single product by id
  getProductById: async (id) => {
    const product = await Product.findByPk(id);

    if (!product) {
      throw httpError(404, "Product not found");
    }

    return product;
  },

  // Create a new product
  createProduct: async (data) => {
    const product = await Product.create(data);
    return product;
  },
};

export default productService;