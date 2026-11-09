import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";
import db from "./models/index.js";
import { UPLOAD_DIR } from "./middleware/upload.middleware.js";
import { notFound, errorHandler } from "./middleware/error.middleware.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"],
  })
);

// Serve uploaded images: http://localhost:5000/uploads/<file>
app.use("/uploads", express.static(UPLOAD_DIR));

// Health check
app.get("/", (req, res) => {
  res.send("Jeweller Catalog server is running");
});

// API routes: /api/products, /api/product-queries, /api/contact
app.use("/api", router);

// These two must stay last
app.use(notFound);
app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connected successfully");

    await db.sequelize.sync();
    console.log("Database synced");

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to start server:", error);
    process.exit(1);
  }
};

startServer();