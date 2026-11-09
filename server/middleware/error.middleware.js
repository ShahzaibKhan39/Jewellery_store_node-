// 404 handler: runs when no route matched
export const notFound = (req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
};

// Global error handler: every next(error) ends up here
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Invalid JSON body
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ success: false, message: "Invalid JSON body" });
  }

  // Multer errors (file too large, unexpected field name, etc.)
  if (err.name === "MulterError") {
    const message =
      err.code === "LIMIT_FILE_SIZE"
        ? "Image must be 5 MB or smaller"
        : `Upload error: ${err.message}`;
    return res.status(400).json({ success: false, message });
  }

  // Sequelize validation errors
  if (
    err.name === "SequelizeValidationError" ||
    err.name === "SequelizeUniqueConstraintError"
  ) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: err.errors.map((e) => e.message),
    });
  }

  // product_id that doesn't exist in products
  if (err.name === "SequelizeForeignKeyConstraintError") {
    return res.status(400).json({ success: false, message: "Invalid product_id" });
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
};