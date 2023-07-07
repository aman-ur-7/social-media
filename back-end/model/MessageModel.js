const mongoose = require("mongoose");

const messageModel = mongoose.Schema(
  {
    conversationId: {
      type: String,
    },
    senderId: {
      type: String,
    },
    message: {
      type: String,
    },
    // sender: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
    // content: {
    //   type: String,
    //   trim: true,
    // },
    // chat: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    // },
  }
  // {
  //   timestamps: true,
  // }
);

const message = mongoose.model("message", messageModel);
module.exports = message;
