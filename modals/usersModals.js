const dbConnection = require("../knex/knex");

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

module.exports = { userSignupModel, getUserByEmailModel };
