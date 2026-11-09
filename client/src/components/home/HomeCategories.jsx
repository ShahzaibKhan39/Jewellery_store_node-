import React from "react";
import { HomeCategoryGrid } from "./HomeCategoryGrid";

export const HomeCategories = ({ categories }) => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center space-y-2 mb-10">
      <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-normal text-[#27221D]">
        Browse by Category
      </h2>
      <p className="text-xs sm:text-sm text-[#7D756D] tracking-wide">
        Discover our meticulously curated collections
      </p>
    </div>
    <HomeCategoryGrid categories={categories} />
  </section>
);
