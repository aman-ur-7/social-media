const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");
const Router = express.Router();

Router.route("/").post(registerUser);
Router.post("/login", authUser);

module.exports = Router;
