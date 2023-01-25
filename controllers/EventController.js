const dbConnection = require("../knex/knex");

const { getDSResults } = require("../modals/eventsModels");

const cityEvents = async (req, res) => {
    try {
        const city = req.params.city;
        const reqCategory = req.params.category;
        console.log("City from params: ", city);
        const result = await dbConnection(city)
            .where({ category: reqCategory })
            .limit(5);
        res.send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const test = async (req, res) => {
    console.log("Testing");
    try {
        const result = await dbConnection("NYC").select("*");
        if (result) {
            res.status(200).send(result);
        }
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

const modelSuggestedEvents = async (req, res) => {
    try {
        const { eventId, city } = req.params;
        const result = await getDSResults(eventId, city);
        res.send(result);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { cityEvents, modelSuggestedEvents, test };
