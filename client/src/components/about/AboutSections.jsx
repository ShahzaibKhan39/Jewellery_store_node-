import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck } from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export const CraftGrid = ({ steps }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {steps.map(({ icon: Icon, title, text }, index) => (
      <motion.div
        key={title}
        {...fadeIn}
        transition={{ duration: 0.5, delay: index * 0.08 }}
        className="bg-white rounded-3xl p-6 border border-[#EDE7DD] shadow-[0_4px_20px_rgb(0,0,0,0.02)] space-y-4"
      >
        <div className="flex items-center justify-between">
          <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] flex items-center justify-center text-[#C99A45]">
            <Icon className="w-6 h-6" />
          </div>
          <span className="font-['Cormorant_Garamond'] text-3xl text-[#E5DACD]">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#27221D]">
          {title}
        </h3>
        <p className="text-xs text-[#7D756D] leading-relaxed">{text}</p>
      </motion.div>
    ))}
  </div>
);

export const PurityGrid = ({ standards, points }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {standards.map(({ purity, fineness, content, text }) => (
        <motion.div
          key={purity}
          {...fadeIn}
          className="bg-white rounded-3xl p-5 border border-[#EDE7DD] flex flex-col justify-between space-y-3"
        >
          <div>
            <div className="flex items-baseline justify-between border-b border-[#F4EFE6] pb-2 mb-2">
              <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#27221D]">{purity}</h3>
              <span className="text-[10px] font-bold text-[#B38332] bg-[#FAF4E6] px-2 py-0.5 rounded-sm">Fineness {fineness}</span>
            </div>
            <p className="text-[11px] uppercase tracking-wider text-[#A3998E] font-medium mb-1">{content}</p>
            <p className="text-xs text-[#7D756D] leading-relaxed">{text}</p>
          </div>
        </motion.div>
      ))}
    </div>
    <motion.div {...fadeIn} className="bg-[#FAF8F5] rounded-3xl p-6 border border-[#F4EFE6] flex flex-col justify-between space-y-6">
      <div className="space-y-4">
        <div className="w-10 h-10 rounded-xl bg-white text-[#C99A45] flex items-center justify-center shadow-xs border border-[#EDE7DD]">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#27221D]">Catalog Assurance</h3>
        <ul className="space-y-3">
          {points.map((pt, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs text-[#625950] leading-relaxed">
              <BadgeCheck className="w-4 h-4 text-[#C99A45] shrink-0 mt-0.5" />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  </div>
);

export const ArtisansGrid = ({ artisans }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {artisans.map(({ icon: Icon, title, tag, text }) => (
      <motion.div
        key={title}
        {...fadeIn}
        className="bg-white rounded-3xl p-6 border border-[#EDE7DD] shadow-[0_4px_20px_rgb(0,0,0,0.02)] space-y-4"
      >
        <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] flex items-center justify-center text-[#C99A45]">
          <Icon className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <span className="text-[9px] font-bold text-[#B38332] uppercase tracking-widest bg-[#FAF4E6] px-2 py-0.5 rounded-sm">{tag}</span>
          <h3 className="font-['Cormorant_Garamond'] text-xl font-bold text-[#27221D] pt-1">{title}</h3>
        </div>
        <p className="text-xs text-[#7D756D] leading-relaxed">{text}</p>
      </motion.div>
    ))}
  </div>
);
