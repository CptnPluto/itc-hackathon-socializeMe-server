const dbConnection = require("../knex/knex");
const axios = require("axios");

async function userSignupModel(newUser) {
    try {
        const addedUser = await dbConnection.from("users").insert(newUser);
        return true;
    } catch (err) {
        console.log(err);
    }
}

const getUserByEmailModel = async (email) => {
    try {
        const users = await dbConnection
            .from("users")
            .where({ email: email })
            .first();
        return users;
    } catch (err) {
        console.log(err);
    }
};

const getUsersEventsModal = async (body) => {
    try {
        const usersEvents = await dbConnection
            .from("user_events")
            .where({ id: body.userId });
        const eventsArr = usersEvents.map(async (record) => {
            await dbConnection.from(record.city).where({ id: record.id });
        });
        return eventsArr;
    } catch (err) {
        console.log(err);
    }
};

const addToUsersEventsModal = async (body) => {
    try {
        const addedEvent = await dbConnection.from("users-events").insert(body);
        return true;
    } catch (err) {
        console.log(err);
    }
};

// const testModel = async (eventId, city) => {
//     try {
//         const result = await axios.get(
//             `http://34.238.42.93:8080/get_event?${eventId}&${city}`
//         );
//         return result.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

module.exports = {
    userSignupModel,
    getUserByEmailModel,
    getUsersEventsModal,
    addToUsersEventsModal,
    // testModel,
};
