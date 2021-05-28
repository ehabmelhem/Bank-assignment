const express = require("express");
const app = express();

const user = require("../Schema/userModel");

exports.checkUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    await user.find({ userID: username, password: password }).then((docs) => {
      if (docs.length > 0) {
        res.send({ ok: true, message: "Login Success Full" });
      } else {
        res.send({ ok: false, message: "Login Faild" });
      }
    });
  } catch (e) {
    res.send({ ok: false, message: "Login Faild" });
  }
};

exports.getData = async (req, res) => {
  try {
    const { username } = req.query;

    await user.find({ userID: username }).then((docs) => {
      if (docs.length > 0) {
        res.send({ ok: true, data: docs[0] });
      } else {
        res.send({ ok: false, message: "Error" });
      }
    });
  } catch (e) {
    res.send({ ok: false, message: "Error" });
  }
};
