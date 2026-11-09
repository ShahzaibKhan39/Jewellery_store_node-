const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isValidEmail = (email) => EMAIL_REGEX.test(email);

// Returns a trimmed string, or "" if the value is not a string
export const cleanString = (value) =>
  typeof value === "string" ? value.trim() : "";

// Checks a required text field and pushes a message into `errors` if it is bad
export const checkRequired = (errors, label, value, maxLength) => {
  if (!value) {
    errors.push(`${label} is required`);
  } else if (maxLength && value.length > maxLength) {
    errors.push(`${label} must be at most ${maxLength} characters`);
  }
};