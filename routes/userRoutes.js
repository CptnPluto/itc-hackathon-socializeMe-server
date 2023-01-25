const express = require("express");
const userRouter = express.Router();

const userController = require("../controllers/UserController");

const {
  checkPassword,
  hashPassword,
  loginIsUserExist,
  isUserExist,
  auth,
} = require("../middleware/usersMiddleware");

//bdy should contain id(event) and city(string)
userRouter.post("/usersEvents/", auth, userController.addToUsersEvents);

userRouter.get("/usersEvents", auth, userController.getUsersEvents);

userRouter.post(
  "/signup",
  checkPassword,
  isUserExist,
  hashPassword,
  userController.userSignup
);

userRouter.post("/login", loginIsUserExist, userController.userLogin);

module.exports = userRouter;
