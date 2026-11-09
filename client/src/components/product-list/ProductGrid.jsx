import React from "react";
import ProductCard from "../ProductCard";

export const ProductGrid = ({ products, loading }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
          <div
            key={n}
            className="bg-white rounded-3xl p-4 border border-[#EDE7DD] h-88 animate-pulse flex flex-col justify-between"
          >
            <div className="w-full aspect-square bg-[#F3EDE3] rounded-2xl" />
            <div className="h-4 bg-[#F3EDE3] rounded w-3/4 mt-4" />
            <div className="h-3 bg-[#F3EDE3] rounded w-1/2 mt-2" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};
