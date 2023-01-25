const express = require("express");

const usersController = require("../controllers/usersController");

const usersRouter = express.Router();

const {
  checkPassword,
  hashPassword,
  loginIsUserExist,
  isUserExist,
  auth,
} = require("../middleware/usersMiddleware");

//bdy should contain id(event) and city(string)
usersRouter.post("/usersEvents/", auth, usersController.addToUsersEvents);

usersRouter.get("/usersEvents", auth, usersController.getUsersEvents);

usersRouter.post(
  "/signup",
  checkPassword,
  isUserExist,
  hashPassword,
  usersController.userSignup
);

usersRouter.post("/login", loginIsUserExist, usersController.userLogin);

module.exports = usersRouter;
