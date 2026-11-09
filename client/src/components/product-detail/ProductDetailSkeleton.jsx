import React from "react";

export const ProductDetailSkeleton = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-pulse">
    <div className="h-4 bg-[#F3EDE3] rounded w-64" />
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
      <div className="aspect-square bg-[#F3EDE3] rounded-3xl" />
      <div className="bg-white rounded-3xl border border-[#EDE7DD] p-8 space-y-5">
        <div className="h-5 bg-[#F3EDE3] rounded w-32" />
        <div className="h-10 bg-[#F3EDE3] rounded w-3/4" />
        <div className="h-8 bg-[#F3EDE3] rounded w-40" />
        <div className="h-24 bg-[#F3EDE3] rounded" />
        <div className="h-12 bg-[#F3EDE3] rounded-full w-48" />
      </div>
    </div>
  </div>
);
