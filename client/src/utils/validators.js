const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateInquiry = ({ name, email, message }) => {
  const errors = {};
  const cleanName = (name || "").trim();
  const cleanEmail = (email || "").trim();
  const cleanMessage = (message || "").trim();

  if (!cleanName) errors.name = "Please enter your name";
  else if (cleanName.length > 100)
    errors.name = "Name must be at most 100 characters";

  if (!cleanEmail) errors.email = "Please enter your email address";
  else if (cleanEmail.length > 150)
    errors.email = "Email must be at most 150 characters";
  else if (!EMAIL_REGEX.test(cleanEmail))
    errors.email = "Please enter a valid email address";

  if (!cleanMessage) errors.message = "Please write a message";

  return errors;
};

export const getErrorMessages = (err) => {
  const data = err?.response?.data;
  if (Array.isArray(data?.errors) && data.errors.length > 0) return data.errors;
  if (data?.message) return [data.message];
  if (err?.request && !err?.response) {
    return [
      "Unable to reach the server. Please check your connection and try again.",
    ];
  }
  return ["Something went wrong. Please try again."];
};
