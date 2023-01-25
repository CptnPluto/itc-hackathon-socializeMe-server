const express = require("express");

const UsersController = require("../controllers/UsersController");

const usersRouter = express.Router();

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
    UsersController.userSignup
);

usersRouter.post("/login", loginIsUserExist, UsersController.userLogin);

module.exports = usersRouter;
