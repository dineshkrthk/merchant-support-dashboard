const express = require("express");
const ticketController = require("../controllers/ticket.controller");

const router = express.Router();

router.post("/", ticketController.createTicket);
router.get("/", ticketController.getAllTickets);
router.patch("/:id", ticketController.updateTicketStatus);

module.exports = router;