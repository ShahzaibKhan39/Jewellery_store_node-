import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

export const HomeHero = () => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-4">
    <div className="relative rounded-[2.5rem] overflow-hidden bg-[#2C2621] border border-[#E5DACD] min-h-[460px] md:min-h-[520px] flex items-center shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
      {/* Background image & deep premium gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://unsplash.com"
          alt="Haute Jewelry Catalog"
          className="w-full h-full object-cover object-right md:object-center opacity-40 mix-blend-lighten"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#241F1A] via-[#2C2621]/80 to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 p-8 sm:p-14 md:p-20 max-w-2xl text-white space-y-6">
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-medium tracking-widest uppercase border border-white/20 text-[#FCEAC5]">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Catalog &bull; 2026 Collection</span>
        </div>
        <h1 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-6xl font-normal leading-[1.1] tracking-tight">
          Elevate Your Everyday Essentials
        </h1>
        <p className="text-sm sm:text-base text-[#E2DACF] font-light leading-relaxed max-w-lg">
          Curated haute jewelry crafted in warm neutrals and solid gold for timeless living. Explore our non-purchasable bespoke portfolio.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link to="/products" className="bg-[#C99A45] hover:bg-[#B38332] text-white px-7 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 shadow-md shadow-[#C99A45]/30 hover:scale-105 active:scale-95">
            Browse Catalog
          </Link>
          <Link to="/about" className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/30 px-7 py-3 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95">
            Our Atelier
          </Link>
        </div>
      </div>
    </div>
  </section>
);
