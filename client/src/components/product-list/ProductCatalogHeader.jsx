import React from "react";

export const ProductCatalogHeader = () => (
  <div className="rounded-3xl bg-[#F4EFE6] border border-[#E5DACD] p-8 sm:p-12 text-center space-y-3">
    <span className="text-[11px] uppercase tracking-widest text-[#B38332] font-semibold bg-[#FAF4E6] px-3 py-1 rounded-full border border-[#EDE7DD]">
      Non-Purchasable Portfolio
    </span>
    <h1 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-normal text-[#27221D]">
      Jewelry Catalog &amp; Archives
    </h1>
    <p className="text-xs sm:text-sm text-[#7D756D] max-w-xl mx-auto leading-relaxed">
      Select any piece to review purity benchmarks, metal weights, and directly submit a custom query to our atelier.
    </p>
  </div>
);
