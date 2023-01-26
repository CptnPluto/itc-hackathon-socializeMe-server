const express = require("express");
const eventsRouter = express.Router();

const EventController = require("../controllers/EventController");

eventsRouter.get("/cityEvents/:city/:category", EventController.cityEvents);

eventsRouter.get("/ds/:eventId/:homeCity/:targetCity", EventController.modelSuggestedEvents);

module.exports = eventsRouter;
