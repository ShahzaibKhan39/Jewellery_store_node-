export const getFullImageUrl = (url) => {
  if (!url) return null;
  if (url.startsWith("http")) return url;
  return `http://localhost:5000${url.startsWith("/") ? "" : "/"}${url}`;
};

export const formatPrice = (price) =>
  price
    ? `$${Number(price).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`
    : "Price on Request";

export const formatWeight = (weight) => {
  if (weight === null || weight === undefined || weight === "") return null;
  const value = Number(weight);
  return Number.isFinite(value) ? `${value.toFixed(2)} g` : null;
};
