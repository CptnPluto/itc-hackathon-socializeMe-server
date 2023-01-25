const express = require("express");
const userRouter = express.Router();

const UserController = require("../controllers/UserController");

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

//bdy should contain id(event) and city(string)
usersRouter.post("/usersEvents/", auth, usersController.addToUsersEvents);

usersRouter.get("/usersEvents", auth, usersController.getUsersEvents);

userRouter.post(
  "/signup",
  checkPassword,
  isUserExist,
  hashPassword,
  UserController.userSignup
);

userRouter.post("/login", loginIsUserExist, UserController.userLogin);

module.exports = userRouter;
