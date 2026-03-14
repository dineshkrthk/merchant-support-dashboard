const ticketService = require("../services/ticket.service");

async function createTicket(req, res, next) {
  try {
    const { subject, message, priority } = req.body;
    const ticket = await ticketService.createTicket({
      subject,
      message,
      priority,
    });

    res.status(201).json({
      success: true,
      data: ticket,
      message: "Ticket created successfully.",
    });
  } catch (error) {
    next(error);
  }
}

async function getAllTickets(req, res, next) {
  try {
    const tickets = await ticketService.getAllTickets();

    res.status(200).json({
      success: true,
      data: tickets,
    });
  } catch (error) {
    next(error);
  }
}

async function updateTicketStatus(req, res, next) {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedTicket = await ticketService.updateTicketStatus(id, status);

    res.status(200).json({
      success: true,
      data: updatedTicket,
      message: "Ticket status updated successfully.",
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  createTicket,
  getAllTickets,
  updateTicketStatus,
};