const router = require("express").Router();
const companyController = require("../Controller/company");
const companyModel = require("../Schema/companyModel");
router.route("/addCompany").post(companyController.addCompany);
router.route("/addAcounts").post(companyController.addAccounts);
module.exports = router;
