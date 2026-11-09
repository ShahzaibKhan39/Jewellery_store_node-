import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import InquiryForm from "../components/InquiryForm";
import { ContactInfoCards } from "../components/ContactInfoCards";
import { ContactHeader, ContactFormSidebar } from "../components/contact/ContactLayoutPieces";
import { submitContactMessage } from "../services/api";
import { DEVELOPERS, ADDRESS, telHref, mailHref, displayName } from "../constants/siteInfo";

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email",
    lines: DEVELOPERS.map((dev) => ({
      key: dev.email,
      text: dev.email,
      caption: dev.name ? displayName(dev) : null,
      href: mailHref(dev.email),
    })),
  },
  {
    icon: Phone,
    label: "Phone",
    lines: DEVELOPERS.map((dev) => ({
      key: dev.phone,
      text: dev.phone,
      caption: dev.name ? displayName(dev) : null,
      href: telHref(dev.phone),
    })),
  },
  {
    icon: MapPin,
    label: "Atelier Address",
    lines: [{ key: ADDRESS, text: ADDRESS, caption: null, href: null }],
  },
];

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <ContactHeader />
      <ContactInfoCards cards={CONTACT_CARDS} />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pt-4">
        <ContactFormSidebar />

        <div className="lg:col-span-3 bg-white rounded-3xl border border-[#EDE7DD] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8">
          <InquiryForm
            idPrefix="contact"
            submitLabel="Send Message"
            successTitle="Message Sent"
            messagePlaceholder="How can we help you?"
            onSubmit={submitContactMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
