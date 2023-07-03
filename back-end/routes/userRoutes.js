const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
// const { protect } = require("../middleware/AuthMiddleware");
const Router = express.Router();

Router.route("/").post(registerUser);
Router.post("/login", authUser);
Router.route("/").get(allUsers);

module.exports = Router;
