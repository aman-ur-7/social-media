const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  conversation,
  conversationUserId,
} = require("../controllers/userControllers");
const Router = express.Router();

Router.route("/").post(registerUser);
Router.route("/").get(allUsers);
Router.post("/login", authUser);
Router.post("/conversation", conversation);
Router.get("/conversation/:userId", conversationUserId);
module.exports = Router;
