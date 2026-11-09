import React from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { useInquiryForm } from "../hooks/useInquiryForm";

const inputClass = (hasError) =>
  `w-full bg-[#FAF7F2] border text-sm rounded-2xl px-4 py-3 text-[#27221D] placeholder-[#9E9488] focus:outline-none focus:ring-1 transition-all ${
    hasError
      ? "border-[#D99A86] focus:border-[#B5533C] focus:ring-[#B5533C]"
      : "border-[#E5DACD] focus:border-[#C99A45] focus:ring-[#C99A45]"
  }`;

const Field = ({ id, label, error, children }) => (
  <div className="space-y-1.5">
    <label htmlFor={id} className="block text-xs font-semibold text-[#27221D] tracking-wide">
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} className="text-[11px] text-[#B5533C]">
        {error}
      </p>
    )}
  </div>
);

const InquiryForm = ({
  onSubmit,
  idPrefix = "inquiry",
  submitLabel = "Send Inquiry",
  messagePlaceholder = "How can we help you?",
  successTitle = "Thank you",
}) => {
  const {
    values,
    fieldErrors,
    status,
    serverErrors,
    successMessage,
    handleChange,
    handleSubmit,
    handleResetStatus,
  } = useInquiryForm(onSubmit);

  if (status === "success") {
    return (
      <div
        role="status"
        className="text-center py-10 px-4 space-y-4 bg-[#FAF4E6] border border-[#EDE7DD] rounded-3xl"
      >
        <div className="w-14 h-14 mx-auto rounded-full bg-white text-[#C99A45] border border-[#E9DDBE] flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#27221D]">
          {successTitle}
        </h3>
        <p className="text-xs sm:text-sm text-[#7D756D] max-w-sm mx-auto leading-relaxed">
          {successMessage}. Our atelier team will get back to you by email.
        </p>
        <button
          type="button"
          onClick={handleResetStatus}
          className="text-xs font-semibold bg-[#27221D] hover:bg-[#3E372F] text-white px-5 py-2.5 rounded-full transition-all active:scale-95"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field id={`${idPrefix}-name`} label="Your Name" error={fieldErrors.name}>
          <input
            id={`${idPrefix}-name`}
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="e.g. Ayesha Khan"
            aria-invalid={Boolean(fieldErrors.name)}
            aria-describedby={fieldErrors.name ? `${idPrefix}-name-error` : undefined}
            className={inputClass(fieldErrors.name)}
          />
        </Field>

        <Field id={`${idPrefix}-email`} label="Email Address" error={fieldErrors.email}>
          <input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            disabled={isLoading}
            placeholder="you@example.com"
            aria-invalid={Boolean(fieldErrors.email)}
            aria-describedby={fieldErrors.email ? `${idPrefix}-email-error` : undefined}
            className={inputClass(fieldErrors.email)}
          />
        </Field>
      </div>

      <Field id={`${idPrefix}-message`} label="Message" error={fieldErrors.message}>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          disabled={isLoading}
          placeholder={messagePlaceholder}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={fieldErrors.message ? `${idPrefix}-message-error` : undefined}
          className={`${inputClass(fieldErrors.message)} resize-y`}
        />
      </Field>

      {status === "error" && serverErrors.length > 0 && (
        <div
          role="alert"
          className="flex items-start gap-3 bg-[#FBEFEA] border border-[#EBCFC4] text-[#8A3B27] rounded-2xl p-4"
        >
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <ul className="text-xs space-y-1 leading-relaxed">
            {serverErrors.map((message, index) => (
              <li key={index}>{message}</li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C99A45] hover:bg-[#B38332] text-white text-sm font-semibold tracking-wide px-8 py-3 rounded-full shadow-md shadow-[#C99A45]/30 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed disabled:active:scale-100"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>{submitLabel}</span>
          </>
        )}
      </button>
    </form>
  );
};

export default InquiryForm;
