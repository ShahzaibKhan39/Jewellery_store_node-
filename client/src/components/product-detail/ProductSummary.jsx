import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { SpecRow } from "./SpecRow";

export const ProductSummary = ({ name, formattedPrice, sku, category, weight, onInquiryClick }) => (
  <div className="bg-white rounded-3xl border border-[#EDE7DD] p-6 sm:p-8 flex flex-col justify-between h-full space-y-6">
    <div className="space-y-4">
      {sku && (
        <span className="inline-block text-[10px] font-bold tracking-widest text-[#B38332] uppercase bg-[#FAF4E6] px-2.5 py-1 rounded-md">
          SKU: {sku}
        </span>
      )}
      <h1 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl lg:text-5xl text-[#27221D] leading-tight font-medium">
        {name}
      </h1>
      <p className="text-xl sm:text-2xl font-light text-[#B38332]">{formattedPrice}</p>
      
      <div className="pt-2">
        <dl className="border-t border-[#F4EFE6] mt-2">
          <SpecRow label="Category" value={category} />
          <SpecRow label="Weight estimate" value={weight} />
        </dl>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4 border-t border-[#F4EFE6]">
      <button
        type="button"
        onClick={onInquiryClick}
        className="flex-1 inline-flex items-center justify-center gap-2 text-xs font-semibold bg-[#27221D] hover:bg-[#3E372F] text-white px-6 py-3.5 rounded-full transition-all"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Send an Inquiry</span>
      </button>
      <Link
        to="/products"
        className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-white hover:bg-[#FAF8F5] text-[#7D756D] border border-[#EDE7DD] px-5 py-3.5 rounded-full transition-all"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back</span>
      </Link>
    </div>
  </div>
);
