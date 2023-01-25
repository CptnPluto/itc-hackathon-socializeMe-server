require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes.js");
const cors = require("cors");
const dbConnection = require("./knex/knex");

const EventController = require("./controllers/EventController.js");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan("tiny"));
app.use(
    cors({
        origin: [
            "http://localhost:8080",
            "https://itc-hackathon-socialize-me-client.vercel.app",
        ],
    })
);

app.get("/homeEvents", EventController.getHomeEvents);

// Start server with db connection
dbConnection.migrate.latest().then((migration) => {
    if (migration) {
        console.log("Connected to DB", migration);
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    }
});
