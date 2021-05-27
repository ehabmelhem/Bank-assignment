const mongoose = require("mongoose");
const user = mongoose.model("userCollection", {
  userID: String,
  userEmail: String,
  FirstName: String,
  FamilyName: String,
  PhoneNumber: String,
  DateOfbirth: String,
  companyName: String,
  CompanyNyumber: String,
  password: String,
  LastLoginDate: String,
});

module.exports = user;
