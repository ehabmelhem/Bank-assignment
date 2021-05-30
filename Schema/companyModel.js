const mongoose = require("mongoose");
const company = mongoose.model("companyCollection", {
  userID: String,
  companyName: String,
  companyNumber: String,
  Haazka: String,
  bankAccounts: [
    {
      Bank: String,
      branch: String,
      accountNumber: String,
      id: String,
    },
  ],
});
module.exports = company;
