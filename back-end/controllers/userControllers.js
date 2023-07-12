const asyncHandler = require("express-async-handler");
const user = require("../model/UserModel");
const generateToken = require("../config/generateToken");
const conversationModel = require("../model/ChatModel");
const UserModel = require("../model/UserModel");
const messageModel = require("../model/MessageModel");

const registerUser = asyncHandler(async (req, res) => {
  const { name, password, email, pic } = req.body;

  if (!name || !password || !email) {
    res.status(400);
    throw new Error("please enter all these fields");
  }

  const userExist = await user.findOne({ email });

  if (userExist) {
    res.status(400);
    throw new Error("user already exists");
  }

  const createUser = await user.create({
    name,
    email,
    password,
    pic,
  });

  if (createUser) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const createUser = await user.findOne({ email });

  if (createUser && (await createUser.matchPassword(password))) {
    res.json({
      // message: ["we did"],
      id: createUser._id,
      email: createUser.email,
      name: createUser.name,
    });
  }
});

const allUsers = asyncHandler(async (req, res) => {
  // const keyword = req.query.search
  //   ? {
  //       $or: [
  //         { name: { $regex: req.query.search, $options: "i" } },
  //         { email: { $regex: req.query.search, $options: "i" } },
  //       ],
  //     }
  //   : {};

  // const curnUser = await user
  //   .find(keyword)
  //   .find({ _id: { $ne: req.user._id } });

  // res.send(curnUser);

  try {
    const users = await UserModel.find();
    const onlyUsers = users.map((user) => {
      return { user: { name: user.name, email: user.email }, userId: user._id };
    });
    res.send(onlyUsers);
  } catch (error) {
    console.log(error);
  }
});

const conversation = asyncHandler(async (req, res) => {
  try {
    const { senderId, receivedId } = req.body;
    const newConversation = await new conversationModel({
      members: [senderId, receivedId],
    });
    newConversation.save();
    res.send(newConversation);
  } catch (error) {
    throw error;
  }
});

const conversationUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const conversation = await conversationModel.find({
      members: { $in: [userId] },
    });

    const conversationUnit = await Promise.allSettled(
      conversation.map(async (conversation) => {
        const receiveId = await conversation.members.find(
          (members) => members.members !== userId
        );
        const user = await UserModel.findById(receiveId);
        return {
          user: {
            email: user.email,
            name: user.name,
            pic: user.pic,
          },
          conversationId: conversation._id,
        };
      })
    );
    // console.log(conversationUnit);
    res.send(conversationUnit);
  } catch (error) {
    console.log(error);
  }
};

const message = asyncHandler(async (req, res) => {
  try {
    const { conversationId, senderId, message, receiveId = "" } = req.body;
    if (!senderId || !message) return res.send("Please fill the requirements");
    if (!conversationId && receiveId) {
      const newConversation = new conversationModel({
        members: [senderId, receiveId],
      });
      await newConversation.save();

      const newMessage = new messageModel({
        conversationId: newConversation._id,
        senderId,
        message,
      });
      await newMessage.save();
      res.send("radhe radhe");
    } else if (!conversationId && !receiveId) {
      res.send("Please fill the requirements");
    }
    const newMessage = new messageModel({ conversationId, senderId, message });
    await newMessage.save();

    res.send(newMessage);
  } catch (error) {
    console.log(error);
  }
});

const messageConversationId = asyncHandler(async (req, res) => {
  try {
    const conversationId = req.params.conversationId;
    if (!conversationId === "new") return res.json([]);
    const messages = await messageModel.find({ conversationId });
    const messageItem = await Promise.allSettled(
      messages.map(async (message) => {
        const user = await UserModel.findById(message.senderId);
        return {
          user: { id: user._id, email: user.email, name: user.name },
          message: message.message,
        };
      })
    );
    res.status(200).json(await messageItem);
  } catch (error) {
    console.log(error);
  }
});
module.exports = {
  registerUser,
  allUsers,
  authUser,
  conversation,
  conversationUserId,
  message,
  messageConversationId,
};
