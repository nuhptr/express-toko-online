const express = require("express");
const router = express.Router();

const { auth } = require("../../middleware/auth");
const upload = require("../../middleware/multer");

const uploadController = require("./controller");

router.post(
  "/upload",
  auth,
  upload.single("image"),
  uploadController.uploadImage
);

module.exports = router;
