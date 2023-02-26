const express = require("express");
const router = express.Router();

const userController = require("./controller");

router.post("/auth/signin", userController.signin);
router.post("/auth/signup", userController.signup);

module.exports = router;
