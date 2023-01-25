const express = require("express");
const userRouter = express.Router();

const UserController = require("../controllers/UserController");

const {
    checkPassword,
    hashPassword,
    loginIsUserExist,
    isUserExist,
} = require("../middleware/usersMiddleware");

userRouter.post(
    "/signup",
    checkPassword,
    isUserExist,
    hashPassword,
    UsersController.userSignup
);

userRouter.post("/login", loginIsUserExist, UserController.userLogin);

module.exports = userRouter;
