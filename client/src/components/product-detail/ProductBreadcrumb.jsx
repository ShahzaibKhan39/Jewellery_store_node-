import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export const ProductBreadcrumb = ({ productName, categoryName }) => (
  <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-[#A3998E]">
    <Link to="/" className="hover:text-[#27221D] transition-colors">Home</Link>
    <ChevronRight className="w-3 h-3 text-[#EDE7DD]" />
    <Link to="/products" className="hover:text-[#27221D] transition-colors">Catalog</Link>
    {categoryName && (
      <>
        <ChevronRight className="w-3 h-3 text-[#EDE7DD]" />
        <span className="capitalize">{categoryName}</span>
      </>
    )}
    <ChevronRight className="w-3 h-3 text-[#EDE7DD]" />
    <span className="text-[#7D756D] truncate max-w-[180px] sm:max-w-none">{productName}</span>
  </nav>
);
