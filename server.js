const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Login = require("./Router/user");
const app = express();
app.use(bodyParser.json());
// mongodb+srv://ehab:Bk7caXDZGUQOG8Tq@cluster0.7c2tr.mongodb.net/test
mongoose.connect(
  "mongodb+srv://ehab:Bk7caXDZGUQOG8Tq@cluster0.7c2tr.mongodb.net/Bank",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("we are connected to DB");
});

app.use("/api/Login", Login);

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("Listen on port ", PORT);
});
