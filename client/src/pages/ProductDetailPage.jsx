import React from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, RotateCcw } from "lucide-react";

import { useProduct } from "../hooks/useProduct";
import { getFullImageUrl, formatPrice, formatWeight } from "../utils/format";
import { StateMessage } from "../components/common/stateMessage";

import { ProductDetailSkeleton } from "../components/product-detail/ProductDetailSkeleton";
import { ProductBreadcrumb } from "../components/product-detail/ProductBreadcrumb";
import { ProductGallery } from "../components/product-detail/ProductGallery";
import { ProductSummary } from "../components/product-detail/ProductSummary";
import { ProductDescription } from "../components/product-detail/ProductDescription";
import { ProductQuerySection } from "../components/product-detail/ProductQuerySection";

const ProductDetailPage = () => {
  const { id } = useParams();
  const { product, status, retry } = useProduct(id);

  const scrollToInquiry = () => {
    document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (status === "loading") return <ProductDetailSkeleton />;

  if (status === "notfound") {
    return (
      <StateMessage title="Piece Not Found" message="This piece is not in our catalog. It may have been removed, or the link may be incorrect.">
        <Link to="/products" className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#27221D] hover:bg-[#3E372F] text-white px-5 py-2.5 rounded-full transition-all">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Catalog</span>
        </Link>
      </StateMessage>
    );
  }

  if (status === "error" || !product) {
    return (
      <StateMessage title="Something Went Wrong" message="We couldn't load this piece right now. Please check your connection and try again.">
        <button type="button" onClick={retry} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#C99A45] hover:bg-[#B38332] text-white px-5 py-2.5 rounded-full transition-all">
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Try Again</span>
        </button>
        <Link to="/products" className="text-xs font-semibold text-[#B38332] hover:text-[#27221D] px-3 py-2.5 transition-colors">Back to Catalog</Link>
      </StateMessage>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-12">
      <ProductBreadcrumb productName={product.name} categoryName={product.category} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <ProductGallery imageUrl={getFullImageUrl(product.image_url)} name={product.name} />
        <ProductSummary
          name={product.name}
          formattedPrice={formatPrice(product.price)}
          sku={product.sku}
          category={product.category}
          weight={formatWeight(product.weight_grams)}
          onInquiryClick={scrollToInquiry}
        />
      </div>
      <ProductDescription description={product.description} />
      <ProductQuerySection productId={product.id} productName={product.name} />
    </div>
  );
};

export default ProductDetailPage;
