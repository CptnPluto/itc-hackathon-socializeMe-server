const dbConnection = require("../knex/knex");

const getHomeEvents = async (req, res) => {
    console.log("Getting home evetns");
    res.send("Getting home events");
};

const test = async (req, res) => {
    console.log("Testing");
    const result = await dbConnection("NYC").select("*");
    if (result) {
        res.status(200).send(result);
    }
};

module.exports = { getHomeEvents, test };
