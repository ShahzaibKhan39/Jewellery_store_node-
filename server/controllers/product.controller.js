import fs from "fs";
import path from "path";
import ProductService from "../services/product.service.js";
import { CATEGORIES } from "../models/product.model.js";
import { UPLOAD_DIR } from "../middleware/upload.middleware.js";
import httpError from "../utils/httpError.js";
import { cleanString, checkRequired } from "../utils/validators.js";

// Returns null if empty, otherwise the number (or NaN if invalid)
const parseOptionalNumber = (value) => {
  if (value === undefined || value === null || value === "") return null;
  return Number(value);
};

// Delete an uploaded file (used when validation or saving fails)
const removeUploadedFile = (file) => {
  if (file && file.path) {
    fs.unlink(file.path, () => {});
  }
};

const productController = {
  // GET /api/products?category=Rings
  getProducts: async (req, res, next) => {
    try {
      const { category } = req.query;
      const products = await ProductService.getProducts(category);

      res.status(200).json({
        success: true,
        message: "Products fetched successfully",
        data: products,
      });
    } catch (error) {
      next(error);
    }
  },

  // GET /api/products/:id
  getProductById: async (req, res, next) => {
    try {
      const id = Number(req.params.id);

      if (!Number.isInteger(id) || id <= 0) {
        throw httpError(400, "Product id must be a positive number");
      }

      const product = await ProductService.getProductById(id);

      res.status(200).json({
        success: true,
        message: "Product fetched successfully",
        data: product,
      });
    } catch (error) {
      next(error);
    }
  },

  // POST /api/products  (multipart/form-data)
  createProduct: async (req, res, next) => {
    try {
      const body = req.body || {};
      const errors = [];

      const name = cleanString(body.name);
      const category = cleanString(body.category);
      const material = cleanString(body.material);
      const purity = cleanString(body.purity);
      const description = cleanString(body.description);

      checkRequired(errors, "Name", name, 150);

      if (!category) {
        errors.push("Category is required");
      } else if (!CATEGORIES.includes(category)) {
        errors.push(`Category must be one of: ${CATEGORIES.join(", ")}`);
      }

      if (material.length > 50) {
        errors.push("Material must be at most 50 characters");
      }
      if (purity.length > 20) {
        errors.push("Purity must be at most 20 characters");
      }

      // weight_grams is optional (max 9999.99)
      const weight_grams = parseOptionalNumber(body.weight_grams);
      if (
        weight_grams !== null &&
        (!Number.isFinite(weight_grams) ||
          weight_grams < 0 ||
          weight_grams > 9999.99)
      ) {
        errors.push("weight_grams must be a number between 0 and 9999.99");
      }

      // price is optional, empty means "Price on request"
      const price = parseOptionalNumber(body.price);
      if (
        price !== null &&
        (!Number.isFinite(price) || price < 0 || price > 9999999999.99)
      ) {
        errors.push("price must be a positive number or empty");
      }

      if (errors.length > 0) {
        removeUploadedFile(req.file);
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors,
        });
      }

      // Uploaded image becomes a full URL, or fall back to a pasted link
      let image_url = cleanString(body.image_url) || null;
      if (req.file) {
        image_url = `${req.protocol}://${req.get("host")}/uploads/${path.basename(
          req.file.path
        )}`;
      }

      const product = await ProductService.createProduct({
        name,
        category,
        material: material || null,
        purity: purity || null,
        weight_grams,
        price,
        description: description || null,
        image_url,
      });

      res.status(201).json({
        success: true,
        message: "Product created successfully",
        data: product,
      });
    } catch (error) {
      removeUploadedFile(req.file);
      next(error);
    }
  },
};

export default productController;