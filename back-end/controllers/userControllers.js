const asyncHandler = require("express-async-handler");
const user = require("../model/UserModel");
const generateToken = require("../config/generateToken");

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
      message: ["we did"],
    });
  }
});

const allUsers = asyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: "i" } },
          { email: { $regex: req.query.search, $options: "i" } },
        ],
      }
    : {};

  const curnUser = await user
    .find(keyword)
    .find({ _id: { $ne: req.user._id } });

  res.send(curnUser);
});

module.exports = { registerUser, allUsers, authUser };
