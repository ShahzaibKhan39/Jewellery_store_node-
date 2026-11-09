import React from "react";
import { Search } from "lucide-react";

const CATEGORIES = [
  "All",
  "Rings",
  "Necklaces",
  "Earrings",
  "Bracelets and Bangles",
  "Chains and Pendants",
  "Sets",
];

export const ProductFilters = ({
  activeCategory,
  onCategorySelect,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  totalCount,
}) => (
  <div className="bg-white rounded-3xl p-4 sm:p-5 border border-[#EDE7DD] shadow-[0_4px_20px_rgb(0,0,0,0.02)] space-y-4">
    {/* Category Pills */}
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategorySelect(cat)}
          className={`shrink-0 px-4 py-2 rounded-full text-xs font-medium transition-all ${
            activeCategory === cat
              ? "bg-[#C99A45] text-white shadow-sm shadow-[#C99A45]/30 font-semibold"
              : "bg-[#F8F6F1] text-[#625950] hover:bg-[#EFE9DF] hover:text-[#27221D]"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Search & Sort Row */}
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-[#F4EFE6]">
      <div className="relative w-full sm:w-80">
        <input
          type="text"
          placeholder="Search by piece, metal or gemstone..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full bg-[#FAF7F2] border border-[#E5DACD] text-xs rounded-full pl-9 pr-4 py-2.5 text-[#27221D] placeholder-[#9E9488] focus:outline-none focus:border-[#C99A45]"
        />
        <Search className="w-3.5 h-3.5 text-[#9E9488] absolute left-3.5 top-1/2 -translate-y-1/2" />
      </div>

      <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
        <span className="text-xs text-[#7D756D]">
          Showing <strong className="text-[#27221D]">{totalCount}</strong> creations
        </span>

        <select
          value={sortBy}
          onChange={(e) => onSortChange(e.target.value)}
          className="bg-[#FAF7F2] border border-[#E5DACD] text-xs rounded-full px-4 py-2 text-[#27221D] focus:outline-none focus:border-[#C99A45]"
        >
          <option value="default">Sort by: Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name-asc">Alphabetical: A-Z</option>
        </select>
      </div>
    </div>
  </div>
);
