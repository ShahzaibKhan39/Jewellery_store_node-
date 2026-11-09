import React from "react";
import { Gem, ShieldCheck, Hammer } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#F4EFE6] flex items-start gap-4">
    <div className="p-2.5 bg-white text-[#C99A45] rounded-xl shadow-xs border border-[#EDE7DD]">
      <Icon className="w-4 h-4" />
    </div>
    <div>
      <h4 className="text-xs font-bold text-[#27221D] uppercase tracking-wider mb-1">{title}</h4>
      <p className="text-xs text-[#7D756D] leading-relaxed">{desc}</p>
    </div>
  </div>
);

export const ProductDescription = ({ description }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
    <div className="lg:col-span-2 space-y-4">
      <h3 className="font-['Cormorant_Garamond'] text-2xl text-[#27221D] font-medium">Details</h3>
      <p className="text-sm text-[#7D756D] leading-relaxed max-w-3xl whitespace-pre-line">
        {description || "No description provided for this piece."}
      </p>
    </div>
    <div className="space-y-3">
      <FeatureCard icon={Gem} title="Authentic Material" desc="Certified metals and hand-selected stones." />
      <FeatureCard icon={ShieldCheck} title="Store Warranty" desc="Lifetime cleaning and inspection services." />
      <FeatureCard icon={Hammer} title="Bespoke Sizing" desc="Complimentary sizing adjust within 30 days." />
    </div>
  </div>
);
