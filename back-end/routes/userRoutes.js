const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
} = require("../controllers/userControllers");
// const { protect } = require("../middleware/AuthMiddleware");
const Router = express.Router();

Router.route("/").post(registerUser).get(allUsers);
Router.post("/login", authUser);

module.exports = Router;
