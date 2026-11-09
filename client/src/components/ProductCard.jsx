import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Gem } from "lucide-react";

const ProductCard = ({ product }) => {
  const [imageFailed, setImageFailed] = useState(false);

  const getFullImageUrl = (url) => {
    if (!url) return null;
    if (url.startsWith("http")) return url;
    return `http://localhost:5000${url.startsWith("/") ? "" : "/"}${url}`;
  };

  const imageUrl = getFullImageUrl(product.image_url);

  const formattedPrice = product.price
    ? `$${Number(product.price).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`
    : "Price on Request";

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className="group bg-white rounded-3xl p-3.5 border border-[#EDE7DD] shadow-[0_4px_20px_rgb(0,0,0,0.02)] hover:shadow-[0_12px_30px_rgb(0,0,0,0.08)] hover:border-[#D9CDBF] transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Image wrapper */}
        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#FAF7F2] flex items-center justify-center p-3">
          {/* Badge */}
          <div className="absolute top-3 left-3 z-10">
            <span className="text-[11px] font-medium tracking-wide bg-[#FAF3E0]/90 backdrop-blur-sm text-[#B38332] px-2.5 py-1 rounded-full border border-[#E9DDBE]">
              {product.category || "Jewelry"}
            </span>
          </div>

          {product.purity && (
            <div className="absolute top-3 right-3 z-10">
              <span className="text-[10px] font-semibold bg-[#27221D]/80 backdrop-blur-sm text-[#F7F2E7] px-2 py-0.5 rounded-full">
                {product.purity}
              </span>
            </div>
          )}

          {imageUrl && !imageFailed ? (
            <img
              src={imageUrl}
              alt={product.name}
              className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-[#B9AD9E]">
              <Gem className="w-10 h-10" />
              <span className="text-[10px] tracking-widest uppercase">Image unavailable</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="pt-4 px-1.5">
          <div className="flex items-center gap-1.5 text-[11px] text-[#A3998E] font-medium mb-1">
            {product.material && <span>{product.material}</span>}
            {product.material && product.weight_grams && <span>&bull;</span>}
            {product.weight_grams && <span>{product.weight_grams}g</span>}
          </div>

          <h3 className="font-['Cormorant_Garamond'] text-lg font-bold text-[#27221D] line-clamp-1 group-hover:text-[#B38332] transition-colors">
            {product.name}
          </h3>

          <p className="text-xs text-[#7D756D] line-clamp-2 mt-1 leading-relaxed">
            {product.description || "Handcrafted with immaculate precision and luxury finish."}
          </p>
        </div>
      </div>

      {/* Footer / Price & Detail CTA */}
      <div className="pt-4 px-1.5 mt-2 border-t border-[#F4EFE6] flex items-center justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-wider text-[#A3998E] block">
            Estimate
          </span>
          <span className="text-sm font-semibold text-[#27221D]">
            {formattedPrice}
          </span>
        </div>

        <Link
          to={`/products/${product.id}`}
          className="w-8 h-8 rounded-full bg-[#FAF3E0] hover:bg-[#C99A45] text-[#B38332] hover:text-white border border-[#E9DDBE] flex items-center justify-center transition-all duration-200 group-hover:scale-110 shadow-sm"
          title="View Product Details & Inquire"
        >
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;