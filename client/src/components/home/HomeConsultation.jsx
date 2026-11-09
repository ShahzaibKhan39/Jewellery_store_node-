import React from "react";
import { Link } from "react-router-dom";

export const HomeConsultation = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="rounded-3xl bg-gradient-to-r from-[#F4EFE6] via-[#FAF6EE] to-[#F1ECE2] border border-[#E5DACD] p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="space-y-3 max-w-xl text-center md:text-left">
        <span className="text-xs uppercase tracking-widest text-[#B38332] font-semibold">Direct Jeweller Consultation</span>
        <h3 className="font-['Cormorant_Garamond'] text-3xl font-normal text-[#27221D]">Interested in a Bespoke Commission?</h3>
        <p className="text-xs sm:text-sm text-[#7D756D] leading-relaxed">
          Every creation in our catalog is cast and polished on order. If you'd like custom sizing, alternative gemstones, or a customized setting, our artisans are ready to assist.
        </p>
      </div>
      <Link to="/contact" className="shrink-0 bg-[#27221D] hover:bg-[#3E372F] text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md active:scale-95">
        Connect With Our Goldsmith
      </Link>
    </div>
  </section>
);
