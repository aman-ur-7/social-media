const express = require("express");
const App = express();
const Chats = require("./data/Data");
const dotEnv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
// const userModel = require("./model/UserModel");
App.use(express.json());
App.use(cors());
// const io = require("socket.io")(7000, {
//   cors: {
//     origin: true,
//     credentials: true,
//   },
//   allowEIO3: true,

//   // cors: {
//   //   origin: "http://localhost:7001",
//   //   methods: ["GET", "POST"],
//   // },
// });

dotEnv.config();
connectDB();
const PORT = process.env.PORT;

App.get("/chats", (req, res) => {
  res.send(Chats);
});

App.use("/user", userRoutes);

// let users = [];
// io.on("connection", (socket) => {
//   console.log("socket.io is now connect", socket.id);
//   socket.on("addUser", (userId) => {
//     const isUserExist = userModel.find((user) => user.userId === _id);
//     if (!isUserExist) {
//       const user = { userId, socketId: socket.id };
//       users.push(user);
//       io.emit("getUser", users);
//     }
//   });
// });
App.listen(PORT, () => {
  console.log(`server is started`);
});
