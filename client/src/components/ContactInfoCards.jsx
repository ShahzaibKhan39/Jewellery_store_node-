import React from "react";
import { motion } from "framer-motion";
import { DEVELOPERS, ADDRESS, telHref, mailHref, displayName } from "../constants/siteInfo";

const fadeIn = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.4 },
};

export const ContactInfoCards = ({ cards }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {cards.map(({ icon: Icon, label, lines }) => (
      <motion.div
        key={label}
        {...fadeIn}
        className="flex items-start gap-4 p-5 rounded-3xl bg-white border border-[#EDE7DD] shadow-[0_4px_20px_rgb(0,0,0,0.02)]"
      >
        <div className="w-12 h-12 rounded-xl bg-[#FAF4E6] flex items-center justify-center text-[#C99A45] shrink-0">
          <Icon className="w-6 h-6" />
        </div>
        <div className="min-w-0 space-y-2">
          <h3 className="text-[10px] uppercase tracking-wider text-[#A3998E]">{label}</h3>
          {lines.map(({ key, text, caption, href }) => (
            <div key={key}>
              {caption && <span className="block text-[10px] text-[#A3998E]">{caption}</span>}
              {href ? (
                <a
                  href={href}
                  className="text-sm font-semibold text-[#27221D] hover:text-[#B38332] transition-colors break-all"
                >
                  {text}
                </a>
              ) : (
                <p className="text-sm font-semibold text-[#27221D] break-words">{text}</p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
);
