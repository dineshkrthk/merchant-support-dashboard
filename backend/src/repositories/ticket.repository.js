const fs = require("fs").promises;
const path = require("path");

const ticketsFilePath = path.join(__dirname, "../data/tickets.json");

async function readTickets() {
  const data = await fs.readFile(ticketsFilePath, "utf-8");
  return JSON.parse(data || "[]");
}

async function writeTickets(tickets) {
  await fs.writeFile(ticketsFilePath, JSON.stringify(tickets, null, 2));
}

async function getAllTickets() {
  return await readTickets();
}

async function createTicket(ticket) {
  const tickets = await readTickets();
  tickets.push(ticket);
  await writeTickets(tickets);
  return ticket;
}

async function updateTicketStatus(id, status) {
  const tickets = await readTickets();
  const ticketIndex = tickets.findIndex((ticket) => ticket.id === id);

  if (ticketIndex === -1) {
    return null;
  }

  tickets[ticketIndex].status = status;
  await writeTickets(tickets);

  return tickets[ticketIndex];
}

async function getTicketById(id) {
  const tickets = await readTickets();
  return tickets.find((ticket) => ticket.id === id) || null;
}

module.exports = {
  getAllTickets,
  createTicket,
  updateTicketStatus,
  getTicketById,
};
