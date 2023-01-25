const express = require("express");
const eventsRouter = express.Router();
const dbConnection = require("../knex/knex");

const EventController = require("../controllers/EventController");


eventsRouter.get("/cityEvents/:city/:category", EventController.cityEvents);



module.exports = eventsRouter;
