require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const userRoutes = require("./routes/userRoutes.js");
const cors = require("cors");

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

app.get("/hello", (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
