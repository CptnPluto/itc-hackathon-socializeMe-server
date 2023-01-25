const express = require("express");
const eventRouter = express.Router();
const eventController = require("../controllers/usersController");

eventRouter.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = eventRouter;
