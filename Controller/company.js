const express = require("express");
const app = express();
const user = require("../Schema/userModel");
const company = require("../Schema/companyModel");
exports.addCompany = (req, res) => {
  try {
    const {
      ID,
      companyname,
      companynumber,
      firstname,
      last,
      email,
      dateofbirth,
    } = req.body;

    console.log(email);
    user
      .update(
        { userEmail: email },
        {
          DateOfbirth: dateofbirth,
          companyName: companyname,
          CompanyNyumber: companynumber,
          LastLoginDate: new Date().toString(),
        }
      )
      .then(() => {
        console.log("update has been success full");
      });
    res.send({
      ID,
      companyname,
      companynumber,
      firstname,
      last,
      email,
    });
  } catch (e) {
    res.send({ ok: false, messege: "error" });
  }
};

exports.addAccounts = (req, res) => {
  try {
    const { userID, allAccounts, Hazaka, companyName, companyNumber } =
      req.body;

    const newCompany = new company({
      userID: userID,
      bankAccounts: allAccounts,
      Hazaka: Hazaka,
      companyName: companyName,
      companyNumber: companyNumber,
    });
    newCompany.save().then(() => {
      console.log("save new company accounts");
    });
    res.send({
      ok: true,
      userID,
      allAccounts,
      Hazaka,
      companyName,
      companyNumber,
    });
  } catch (e) {
    res.send({ ok: false, messege: "hello world" });
  }
};
exports.addLoan = (req, res) => {
  try {
    const { username, companyname, companynumber, Loan, LoanTime } = req.body;
    company
      .update(
        {
          userID: username,
          companyName: companyname,
          companyNumber: companynumber,
        },
        { Loan: Loan, LoanTime: LoanTime }
      )
      .then(() => {
        console.log("update loan hass been success full");
      });
    res.send({ ok: true });
  } catch (e) {
    res.send({ ok: false });
  }
};
const companyModel = require("../Schema/companyModel");
