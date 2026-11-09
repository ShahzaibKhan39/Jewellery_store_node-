import React from "react";
import { AlertCircle } from "lucide-react";

export const StateMessage = ({ title, message, children }) => (
  <div className="max-w-2xl mx-auto px-4 sm:px-6 py-16">
    <div className="text-center bg-white rounded-3xl border border-[#EDE7DD] p-10 space-y-4">
      <div className="w-14 h-14 bg-[#FAF4E6] text-[#C99A45] rounded-full flex items-center justify-center mx-auto">
        <AlertCircle className="w-7 h-7" />
      </div>
      <h1 className="font-['Cormorant_Garamond'] text-3xl text-[#27221D]">{title}</h1>
      <p className="text-xs sm:text-sm text-[#7D756D] max-w-sm mx-auto leading-relaxed">
        {message}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        {children}
      </div>
    </div>
  </div>
);
