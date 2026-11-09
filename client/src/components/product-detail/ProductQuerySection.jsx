import React from "react";
import InquiryForm from "../InquiryForm";

export const ProductQuerySection = ({ productId, productName }) => (
  <div id="inquiry" className="border-t border-[#EDE7DD] pt-12 max-w-3xl mx-auto w-full">
    <div className="text-center space-y-2 mb-8">
      <h3 className="font-['Cormorant_Garamond'] text-3xl text-[#27221D]">Inquire About This Piece</h3>
      <p className="text-xs sm:text-sm text-[#7D756D]">
        Our specialists are ready to guide you. Send us a message and we'll reply within 24 hours.
      </p>
    </div>
    <InquiryForm productId={productId} productName={productName} />
  </div>
);
