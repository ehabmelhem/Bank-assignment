const router = require("express").Router();
const user = require("../Schema/userModel");
const userController = require("../Controller/user");
router.route("/checkUser").post(userController.checkUser);
router.route("/getData").get(userController.getData);
module.exports = router;
