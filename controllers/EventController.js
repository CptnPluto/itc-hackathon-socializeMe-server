const dbConnection = require("../knex/knex");

const cityEvents = async (req, res) => {
    const city = req.params.city;
    console.log("City from params: ", city);
    const result = await dbConnection(city).select("*").limit(5);
    res.send(result);
};



const test = async (req, res) => {
    console.log("Testing");
    const result = await dbConnection("NYC").select("*");
    if (result) {
        res.status(200).send(result);
    }
};

module.exports = { cityEvents, test };
