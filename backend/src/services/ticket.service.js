const crypto = require("crypto");
const ticketRepository = require("../repositories/ticket.repository");
const {
  PRIORITY_VALUES,
  STATUS,
  STATUS_VALUES,
} = require("../constants/ticket.constants");
const ApiError = require("../utils/ApiError");

async function createTicket({ subject, message, priority }) {
  if (!subject || !message || !priority) {
    throw new ApiError(400, "Subject, message, and priority are required.");
  }

  if (!PRIORITY_VALUES.includes(priority)) {
    throw new ApiError(
      400,
      `Invalid priority. Allowed values: ${PRIORITY_VALUES.join(", ")}`,
    );
  }

  const newTicket = {
    id: crypto.randomUUID(),
    subject: subject.trim(),
    message: message.trim(),
    priority,
    status: STATUS.NEW,
    createdAt: new Date().toISOString(),
  };

  return await ticketRepository.createTicket(newTicket);
}

async function getAllTickets() {
  const tickets = await ticketRepository.getAllTickets();

  return tickets.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

async function updateTicketStatus(id, status) {
  if (!status) {
    throw new ApiError(400, "Status is required.");
  }

  if (!STATUS_VALUES.includes(status)) {
    throw new ApiError(
      400,
      `Invalid status. Allowed values: ${STATUS_VALUES.join(", ")}`,
    );
  }

  const existingTicket = await ticketRepository.getTicketById(id);

  if (!existingTicket) {
    throw new ApiError(404, "Ticket not found.");
  }

  return await ticketRepository.updateTicketStatus(id, status);
}

module.exports = {
  createTicket,
  getAllTickets,
  updateTicketStatus,
};
