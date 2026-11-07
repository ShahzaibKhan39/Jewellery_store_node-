import express from "express";
import contactController from "../controllers/contact.controller.js";

const contactRouter = express.Router();

// POST /api/contact
contactRouter.post("/", contactController.createContactMessage);

export default contactRouter;