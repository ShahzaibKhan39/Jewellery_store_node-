import ProductQueryService from "../services/productQuery.service.js";
import {
  cleanString,
  checkRequired,
  isValidEmail,
} from "../utils/validators.js";

const productQueryController = {
  // POST /api/product-queries
  createProductQuery: async (req, res, next) => {
    try {
      const body = req.body || {};
      const errors = [];

      // product_id
      const product_id = Number(body.product_id);
      if (
        body.product_id === undefined ||
        body.product_id === null ||
        body.product_id === ""
      ) {
        errors.push("product_id is required");
      } else if (!Number.isInteger(product_id) || product_id <= 0) {
        errors.push("product_id must be a positive number");
      }

      // name, email, message
      const name = cleanString(body.name);
      const email = cleanString(body.email);
      const message = cleanString(body.message);

      checkRequired(errors, "Name", name, 100);
      checkRequired(errors, "Email", email, 150);
      if (email && !isValidEmail(email)) {
        errors.push("Valid email is required");
      }
      checkRequired(errors, "Message", message);

      if (errors.length > 0) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors,
        });
      }

      const query = await ProductQueryService.createProductQuery({
        product_id,
        name,
        email,
        message,
      });

      res.status(201).json({
        success: true,
        message: "Your query has been submitted successfully",
        data: query,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default productQueryController;