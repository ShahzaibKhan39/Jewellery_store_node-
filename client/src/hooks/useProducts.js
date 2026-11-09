import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getProducts } from "../services/api";

export const useProducts = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get("category") || "All";
  const searchParam = searchParams.get("search") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [sortBy, setSortBy] = useState("default");

  const retry = () => setRetryKey((k) => k + 1);

  // Sync state with URL params change
  useEffect(() => {
    setActiveCategory(searchParams.get("category") || "All");
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  useEffect(() => {
    const fetchCatalog = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await getProducts(activeCategory !== "All" ? activeCategory : undefined);
        setProducts(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Could not load products:", err);
        setProducts([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCatalog();
  }, [activeCategory, retryKey]);

  const handleCategorySelect = (cat) => {
    setActiveCategory(cat);
    const newParams = new URLSearchParams(searchParams);
    if (cat === "All") {
      newParams.delete("category");
    } else {
      newParams.set("category", cat);
    }
    setSearchParams(newParams);
  };

  const filteredProducts = products
    .filter((item) => {
      return (
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.material && item.material.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return (Number(a.price) || 0) - (Number(b.price) || 0);
      if (sortBy === "price-high") return (Number(b.price) || 0) - (Number(a.price) || 0);
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      return 0;
    });

  return {
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
  };
};
