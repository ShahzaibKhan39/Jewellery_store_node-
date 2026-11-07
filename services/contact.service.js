import db from "../models/index.js";

const { ContactMessage } = db;

const contactService = {
  // Save a general inquiry from the Contact page
  createContactMessage: async ({ name, email, subject, message }) => {
    const contactMessage = await ContactMessage.create({
      name,
      email,
      subject,
      message,
    });

    return contactMessage;
  },
};

export default contactService;