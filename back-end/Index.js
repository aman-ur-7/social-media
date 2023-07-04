const express = require("express");
const App = express();
const Chats = require("./data/Data");
const dotEnv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatApi = require("./routes/chatApi");

App.use(express.json());
App.use(cors());

dotEnv.config();
connectDB();
const PORT = process.env.PORT;

App.get("/chats", (req, res) => {
  res.send(Chats);
});

App.use("/user", userRoutes);
App.use("/chat", chatApi);

App.listen(PORT, () => {
  console.log(`server is started`);
});
