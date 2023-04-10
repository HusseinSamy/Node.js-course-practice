/** @format */

const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../utils/path.js");

router.get("/", (req, res, next) => {
//  res.send("/ api endpoint");
    res.sendFile(path.join(rootDir, "views", "users.html"));
});

module.exports = router;
