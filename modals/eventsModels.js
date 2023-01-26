const dbConnection = require("../knex/knex");
const axios = require("axios");

const getEventsByIds = async (ids, city) => {
    try {
        const results = await dbConnection(city).whereIn("id", ids);
        return results;
    } catch (error) {
        console.log(error);
    }
};

const getDSResults = async (eventId, city) => {
    try {
        const result = await axios.get(
            `http://34.238.42.93:3000/get_event?${eventId}&${city}`
        );
        const events = await getEventsByIds(result.data, city);
        return events;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { getDSResults };
