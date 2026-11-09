import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "../ProductCard";
import { StateMessage } from "../common/stateMessage";

export const HomeFeaturedSection = ({ products, loading, error }) => (
  <section className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="flex items-end justify-between mb-8">
      <div>
        <span className="text-[11px] uppercase tracking-widest text-[#B38332] font-semibold">Showcase</span>
        <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-normal text-[#27221D]">Featured Catalog Pieces</h2>
      </div>
      <Link to="/products" className="text-xs font-semibold text-[#B38332] hover:text-[#27221D] flex items-center gap-1 group transition-colors">
        <span>View All</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>

    {loading ? (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((n) => (
          <div key={n} className="bg-white rounded-3xl p-4 border border-[#EDE7DD] h-80 animate-pulse flex flex-col justify-between">
            <div className="w-full aspect-square bg-[#F3EDE3] rounded-2xl" />
            <div className="h-4 bg-[#F3EDE3] rounded w-3/4 mt-4" />
            <div className="h-3 bg-[#F3EDE3] rounded w-1/2 mt-2" />
          </div>
        ))}
      </div>
    ) : error ? (
      <StateMessage title="Catalog Unavailable" message="We couldn't load our pieces right now. Please try again in a moment." />
    ) : products.length === 0 ? (
      <StateMessage title="New Pieces Coming Soon" message="Our catalog is being updated. Please check back shortly." />
    ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    )}
  </section>
);
