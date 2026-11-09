import React from "react";

export const SpecRow = ({ label, value }) => (
  <div className="flex items-center justify-between gap-4 py-3 border-b border-[#F4EFE6] last:border-b-0">
    <dt className="text-xs uppercase tracking-wider text-[#A3998E]">{label}</dt>
    <dd className="text-sm font-medium text-[#27221D] text-right">
      {value || <span className="text-[#A3998E] font-normal">Not specified</span>}
    </dd>
  </div>
);
