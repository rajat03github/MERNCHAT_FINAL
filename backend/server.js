const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./Routes/userRoutes");
const chatRoutes = require("./Routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const app = express();
dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.send("Api is working");
});
//allow server to access the sent data
app.use(express.json()); //to accept the data

// ENDPOINTS
app.use("/api/user", userRoutes); //after /api/user/ will be in userRoutes
app.use("/api/chat", chatRoutes); //after /api/chat/ will be in chatRoutes
//errorHANDLERS
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, console.log("SERVER is started"));
