const jwt = require("jsonwebtoken");

const generateToken = (_id) => {
  return (token = jwt.sign({ _id }, "aman", { expiresIn: "7d" }));
};

module.exports = generateToken;
