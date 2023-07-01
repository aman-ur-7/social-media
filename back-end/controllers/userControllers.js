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

module.exports = { registerUser, authUser };
