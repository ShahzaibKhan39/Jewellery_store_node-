import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const ContactHeader = () => (
  <div className="rounded-3xl bg-[#F4EFE6] border border-[#E5DACD] p-8 sm:p-12 text-center space-y-3">
    <span className="text-[11px] uppercase tracking-widest text-[#B38332] font-semibold bg-[#FAF4E6] px-3 py-1 rounded-full border border-[#EDE7DD]">
      Atelier Concierge
    </span>
    <h1 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-normal text-[#27221D]">
      Get in Touch
    </h1>
    <p className="text-xs sm:text-sm text-[#7D756D] max-w-xl mx-auto leading-relaxed">
      Questions about our collections, bespoke commissions or anything else? Send us a message and our team will respond by email.
    </p>
  </div>
);

export const ContactFormSidebar = () => (
  <div className="lg:col-span-2 space-y-4">
    <span className="text-[11px] uppercase tracking-widest text-[#B38332] font-semibold">General Inquiry</span>
    <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-[#27221D] leading-tight">Send Us a Message</h2>
    <p className="text-xs sm:text-sm text-[#7D756D] leading-relaxed">
      Tell us how we can help. If your question is about one specific piece, you can also use the query form on that product's page.
    </p>
    <Link to="/products" className="inline-flex items-center gap-1 text-xs font-semibold text-[#B38332] hover:text-[#27221D] group transition-colors">
      <span>Browse the Catalog</span>
      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
    </Link>
  </div>
);
