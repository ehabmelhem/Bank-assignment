const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
// mongodb+srv://ehab:Bk7caXDZGUQOG8Tq@cluster0.7c2tr.mongodb.net/test

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log("Listen on port ", PORT);
});
