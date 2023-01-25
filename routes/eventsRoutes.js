const express = require("express");
const eventController = require("../controllers/eventsController");
const eventRouter = express.Router();

eventRouter.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = eventRouter;
