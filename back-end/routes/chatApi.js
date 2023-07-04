const express = require("express");
const { accessChat } = require("../controllers/chatControllers");
const Router = express.Router();

Router.route("/").post(accessChat);
// Router.route("/").get(getChat);
// Router.route("/groupchat").post(createGroupChat);
// Router.route("/rename").put(renameGroupChat);
// Router.route("/remove").put(removeGroupChat);
// Router.route("/groupadd").put(addGroupChat);

module.exports = Router;
