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

const getDSResults = async (eventId, homeCity, targetCity) => {
    try {
        const results = await axios.get(
            `http://34.238.42.93:3000/get_event?${eventId}&${homeCity}&${targetCity}`
        );
        arr = results.data;
        const ids = arr.map((result) => {
            return result.index;
        });
        const events = await getEventsByIds(ids, city);
        events.forEach((e) => {
            arr.forEach((element) => {
                if (element.index === e.id) {
                    e.percentMatch = element.percentage;
                }
            });
        });
        return events;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = { getDSResults };
