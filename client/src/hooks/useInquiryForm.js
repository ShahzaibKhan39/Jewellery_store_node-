import { useState } from "react";
import { validateInquiry, getErrorMessages } from "../utils/validators";

const EMPTY_VALUES = { name: "", email: "", message: "" };

export const useInquiryForm = (onSubmit) => {
  const [values, setValues] = useState(EMPTY_VALUES);
  const [fieldErrors, setFieldErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverErrors, setServerErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleResetStatus = () => setStatus("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;

    const errors = validateInquiry(values);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setServerErrors([]);
      setStatus("idle");
      return;
    }

    setFieldErrors({});
    setServerErrors([]);
    setStatus("loading");

    try {
      const response = await onSubmit({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
      });
      setSuccessMessage(
        response?.message || "Your message has been sent successfully"
      );
      setValues(EMPTY_VALUES);
      setStatus("success");
    } catch (err) {
      setServerErrors(getErrorMessages(err));
      setStatus("error");
    }
  };

  return {
    values,
    fieldErrors,
    status,
    serverErrors,
    successMessage,
    handleChange,
    handleSubmit,
    handleResetStatus,
  };
};
