const express = require("express");
const eventsRouter = express.Router();

const EventController = require("../controllers/EventController");

eventsRouter.get("/cityEvents/:city/:category", EventController.cityEvents);

module.exports = eventsRouter;
