const express = require("express");
const { getPost } = require("../controllers/post");

const router = express.Router();

router.get("/find/:postId", getPost);

module.exports = router;
