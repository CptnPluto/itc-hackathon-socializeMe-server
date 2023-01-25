const dbConnection = require("../knex/knex");
const axios = require("axios");

const getDSResults = async (eventId, city) => {
    try {
        const result = await axios.get(
            `http://34.238.42.93:8080/get_event?${eventId}&${city}`
        );
        return result.data;
    } catch (error) {
        console.log(error);
    }
};


module.exports = { getDSResults };
