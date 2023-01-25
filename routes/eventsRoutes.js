const express = require("express");
const eventRouter = express.Router();
const eventController = require("../controllers/eventsController");

eventRouter.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = eventRouter;
