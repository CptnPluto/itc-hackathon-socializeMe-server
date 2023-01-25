require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {
  userSignupModel,
  getUsersEventsModal,
  addToUsersEventsModal,
} = require("../modals/usersModals");
const dbConnection = require("../knex/knex");

const getHomeEvents = async (req, res) => {
  console.log("Getting home evetns");
  res.send("Getting home events");
};

const userSignup = async (req, res) => {
  const { email, password, firstName, lastName } = req.body;
  try {
    const newUser = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    const user = await userSignupModel(newUser);
    res.send({ ok: true });
  } catch (err) {
    res.status(500).send(err);
  }
};

const userLogin = (req, res) => {
  const { password, user } = req.body;
  try {
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else if (!result) {
        res.status(400).send("Password does not match");
      } else {
        const token = jwt.sign(
          {
            id: user.userId,
            name: user.firstName + " " + user.lastName,
          },
          process.env.TOKEN_SECRET,
          {
            expiresIn: "1h",
          }
        );
        res.cookie("token", token, { maxAge: 860000000, httpOnly: true });
        res.send({
          ok: true,
          name: `${user.firstName} ${user.lastName}`,
        });
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

const getUsersEvents = async (req, res) => {
  try {
    const usersEventsList = await getUsersEventsModal(req.body);
    res.send(usersEventsList);
  } catch (err) {
    res.status(500).send(err);
  }
};

const addToUsersEvents = async (req, res) => {
  req.body.id = req.params.id;
  try {
    const addEvent = await addToUsersEventsModal(req.body);
    res.send({ ok: true });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getHomeEvents,
  userSignup,
  userLogin,
  getUsersEvents,
  addToUsersEvents,
};
