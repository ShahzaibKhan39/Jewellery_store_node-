import ContactService from "../services/contact.service.js";
import {
  cleanString,
  checkRequired,
  isValidEmail,
} from "../utils/validators.js";

const contactController = {
  // POST /api/contact
  createContactMessage: async (req, res, next) => {
    try {
      const body = req.body || {};
      const errors = [];

      const name = cleanString(body.name);
      const email = cleanString(body.email);
      const subject = cleanString(body.subject);
      const message = cleanString(body.message);

      checkRequired(errors, "Name", name, 100);
      checkRequired(errors, "Email", email, 150);
      if (email && !isValidEmail(email)) {
        errors.push("Valid email is required");
      }
      if (subject.length > 150) {
        errors.push("Subject must be at most 150 characters");
      }
      checkRequired(errors, "Message", message);

      if (errors.length > 0) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors,
        });
      }

      const contactMessage = await ContactService.createContactMessage({
        name,
        email,
        subject: subject || null,
        message,
      });

      res.status(201).json({
        success: true,
        message: "Your message has been sent successfully",
        data: contactMessage,
      });
    } catch (error) {
      next(error);
    }
  },
};

export default contactController;