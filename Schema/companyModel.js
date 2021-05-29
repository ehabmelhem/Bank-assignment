const mongoose = require("mongoose");
const company = mongoose.model("companyCollection", {
  userID: String,
  companyName: String,
  companyNumber: String,
  Haazka: String,
  bankAccounts: [
    {
      bankName: String,
      branch: String,
      accountNumber: String,
    },
  ],
});
module.exports = company;
