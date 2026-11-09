import { useState, useEffect } from "react";
import { getProductById } from "../services/api";

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [status, setStatus] = useState("loading"); // loading | success | notfound | error
  const [retryKey, setRetryKey] = useState(0);

  const retry = () => setRetryKey((k) => k + 1);

  useEffect(() => {
    let cancelled = false;
    const numericId = Number(id);

    if (!Number.isInteger(numericId) || numericId <= 0) {
      setProduct(null);
      setStatus("notfound");
      return undefined;
    }

    setStatus("loading");

    getProductById(numericId)
      .then((data) => {
        if (cancelled) return;
        if (!data || typeof data !== "object" || !data.id) {
          setProduct(null);
          setStatus("notfound");
          return;
        }
        setProduct(data);
        setStatus("success");
      })
      .catch((err) => {
        if (cancelled) return;
        const code = err?.response?.status;
        setProduct(null);
        setStatus(code === 400 || code === 404 ? "notfound" : "error");
      });

    return () => {
      cancelled = true;
    };
  }, [id, retryKey]);

  return { product, status, retry };
};
