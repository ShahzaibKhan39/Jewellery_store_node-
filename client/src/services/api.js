import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Product services
export const getProducts = async (category) => {
  const params = category && category !== "All" ? { category } : {};
  const response = await API.get("/products", { params });
  return response.data?.data !== undefined ? response.data.data : response.data;
};

export const getProductById = async (id) => {
  const response = await API.get(`/products/${id}`);
  return response.data?.data !== undefined ? response.data.data : response.data;
};

// Product query inquiry submission
export const submitProductQuery = async (queryData) => {
  const response = await API.post("/product-queries", queryData);
  return response.data;
};

// General contact form submission
export const submitContactMessage = async (contactData) => {
  const response = await API.post("/contact", contactData);
  return response.data;
};

export default API;
