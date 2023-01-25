const express = require("express");
const usersRouter = express.Router();
const usersController = require("../controllers/usersController");

const {
  checkPassword,
  hashPassword,
  loginIsUserExist,
  isUserExist,
} = require("../middleware/usersMiddleware");

usersRouter.post(
  "/signup",
  checkPassword,
  isUserExist,
  hashPassword,
  usersController.userSignup
);

usersRouter.post("/login", loginIsUserExist, usersController.userLogin);

module.exports = usersRouter;
