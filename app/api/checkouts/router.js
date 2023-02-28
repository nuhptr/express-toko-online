const express = require("express");
const router = express.Router();

const checkoutController = require("./controller");
const { auth } = require("../../middleware/auth");

router.post("/checkouts", auth, checkoutController.checkout);

module.exports = router;
