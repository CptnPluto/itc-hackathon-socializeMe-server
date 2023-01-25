const express = require("express");
const eventsRouter = express.Router();

const EventController = require("../controllers/EventController");

eventsRouter.get("/cityEvents/:city/:category", EventController.cityEvents);

eventsRouter.get("/ds/:eventId/:city", EventController.modelSuggestedEvents);

module.exports = eventsRouter;
