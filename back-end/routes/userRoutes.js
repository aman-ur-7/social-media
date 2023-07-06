const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
const Router = express.Router();

Router.route("/").post(registerUser);
Router.route("/").get(allUsers);
Router.post("/login", authUser);

module.exports = Router;
