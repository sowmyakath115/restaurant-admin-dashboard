import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const getMenu = (params) => API.get("/menu", { params });
export const searchMenu = (q) => API.get(`/menu/search?q=${q}`);
export const toggleAvailability = (id) =>
  API.patch(`/menu/${id}/availability`);

export const getOrders = (params) => API.get("/orders", { params });
export const updateOrderStatus = (id, status) =>
  API.patch(`/orders/${id}/status`, { status });
