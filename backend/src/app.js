const express = require("express");
const cors = require("cors");
const ticketRoutes = require("./routes/ticket.routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Merchant Support API is running",
  });
});

app.use("/api/tickets", ticketRoutes);

app.use(errorHandler);

module.exports = app;