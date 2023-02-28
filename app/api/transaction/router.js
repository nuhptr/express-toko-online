const express = require("express");
const router = express.Router();

const transactionController = require("./controller");
const { auth } = require("../../middleware/auth");

router.get("/transactions", auth, transactionController.getTransactionList);
router.get(
  "/transactions/:id",
  auth,
  transactionController.detailTransactionList
);

module.exports = router;
