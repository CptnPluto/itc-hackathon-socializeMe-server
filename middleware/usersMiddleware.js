const bcrypt = require("bcrypt");
const { getUserByEmailModel } = require("../modals/usersModals");

const checkPassword = (req, res, next) => {
  const { password, rePassword } = req.body;
  if (password !== rePassword) {
    res.status(400).send("Password dont match");
    return;
  }
  next();
};

const hashPassword = (req, res, next) => {
  const saltRounds = 10;
  bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    req.body.password = hash;
    next();
  });
};

const loginIsUserExist = async (req, res, next) => {
  const user = await getUserByEmailModel(req.body.email);
  if (!user) {
    res.status(400).send("No user with this email");
    return;
  }
  req.body.user = user;
  next();
};

const isUserExist = async (req, res, next) => {
  const user = await getUserByEmailModel(req.body.email);
  if (user) {
    res.status(400).send("User already exists");
    return;
  }
  next();
};

module.exports = { checkPassword, hashPassword, loginIsUserExist, isUserExist };
