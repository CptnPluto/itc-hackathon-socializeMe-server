require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const axios = require("axios");

const eventsRoutes = require("./routes/eventsRoutes");
const userRoutes = require("./routes/userRoutes");
const dbConnection = require("./knex/knex");

const { testModel } = require("./modals/usersModals");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan("tiny"));
app.use(
    cors({
        origin: [
            "http://localhost:8080",
            "https://itc-hackathon-socialize-me-client.vercel.app",
            "http://localhost:3000",
            "http://34.238.42.93:8080",
        ],
    })
);

app.use("/events", eventsRoutes);
app.use("/users", userRoutes);

app.get("/test", (req, res) => {
    console.log("In test route");
    res.send("Test route");
});

// Start server with db connection
dbConnection.migrate.latest().then((migration) => {
    if (migration) {
        console.log("Connected to DB", migration);
        app.listen(PORT, () => {
            console.log(`Server listening on ${PORT}`);
        });
    }
});
