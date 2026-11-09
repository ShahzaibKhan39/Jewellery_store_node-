import React from "react";
import { RotateCcw } from "lucide-react";
import { useProducts } from "../hooks/useProducts";
import { ProductCatalogHeader } from "../components/product-list/ProductCatalogHeader";
import { ProductFilters } from "../components/product-list/ProductFilters";
import { ProductGrid } from "../components/product-list/ProductGrid";
import { StateMessage } from "../components/common/stateMessage";

const ProductsPage = () => {
  const {
    loading,
    error,
    retry,
    activeCategory,
    searchQuery,
    setSearchQuery,
    sortBy,
    setSortBy,
    handleCategorySelect,
    filteredProducts,
  } = useProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
      <ProductCatalogHeader />

      <ProductFilters
        activeCategory={activeCategory}
        onCategorySelect={handleCategorySelect}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        sortBy={sortBy}
        onSortChange={setSortBy}
        totalCount={filteredProducts.length}
      />

      {error ? (
        <StateMessage
          title="Catalog Unavailable"
          message="We couldn't load our pieces right now. Please check your connection and try again."
        >
          <button
            onClick={retry}
            className="inline-flex items-center gap-1.5 text-xs font-semibold bg-[#C99A45] hover:bg-[#B38332] text-white px-5 py-2.5 rounded-full transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Try Again</span>
          </button>
        </StateMessage>
      ) : !loading && filteredProducts.length === 0 ? (
        <StateMessage
          title="No Jewelry Pieces Found"
          message="We couldn't find any creations matching your current search or filters. Try adjusting your terms."
        />
      ) : (
        <ProductGrid products={filteredProducts} loading={loading} />
      )}
    </div>
  );
};

export default ProductsPage;
