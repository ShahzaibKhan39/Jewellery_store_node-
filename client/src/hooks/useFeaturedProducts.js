import { useState, useEffect } from "react";
import { getProducts } from "../services/api";

export const useFeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCatalog = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await getProducts();
        setFeaturedProducts(Array.isArray(data) ? data.slice(0, 4) : []);
      } catch (err) {
        console.error("Could not load products:", err);
        setFeaturedProducts([]);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCatalog();
  }, []);

  return { featuredProducts, loading, error };
};
