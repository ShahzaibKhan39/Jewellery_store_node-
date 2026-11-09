import React from "react";
import { Link } from "react-router-dom";

export const HomeCategoryGrid = ({ categories }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
    {categories.map((cat) => {
      const IconComponent = cat.icon; // Icon reference nikalna
      return (
        <Link
          key={cat.slug}
          to={`/products?category=${encodeURIComponent(cat.slug)}`}
          className="group bg-white rounded-3xl p-5 border border-[#EDE7DD] shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:border-[#D4A359] hover:shadow-[0_12px_25px_rgb(201,154,69,0.12)] transition-all duration-300 flex flex-col items-center text-center space-y-3"
        >
          {/* Emojis ki jagah icon component properly invoke ho raha hai */}
          <div className="w-16 h-16 rounded-full bg-[#FAF5EC] border border-[#EADBBD] flex items-center justify-center text-[#C99A45] group-hover:scale-110 group-hover:bg-[#C99A45] group-hover:text-white transition-all duration-300 shadow-inner">
            <IconComponent className="w-6 h-6 transition-colors duration-300" />
          </div>
          <div>
            <h3 className="text-xs font-semibold text-[#27221D] group-hover:text-[#B38332] transition-colors">
              {cat.name}
            </h3>
            <span className="text-[10px] text-[#A09588] block mt-0.5">Explore &rarr;</span>
          </div>
        </Link>
      );
    })}
  </div>
);
