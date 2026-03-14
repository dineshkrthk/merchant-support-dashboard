import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const getTickets = async () => {
  const response = await api.get("/tickets");
  return response.data;
};

export const createTicket = async (payload) => {
  const response = await api.post("/tickets", payload);
  return response.data;
};

export const updateTicketStatus = async (id, status) => {
  const response = await api.patch(`/tickets/${id}`, { status });
  return response.data;
};

export default api;