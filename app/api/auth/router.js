const express = require("express");
const router = express.Router();

router.get("/auth", function (req, res) {
  res.status(200).json({
    message: "Router Auth",
  });
});

module.exports = router;
