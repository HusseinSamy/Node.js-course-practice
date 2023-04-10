/** @format */

const express = require("express");
const path = require("path")
const router = express.Router();

router.get("/add-user", (req, res, next) => {
    res.sendFile(path.join(__dirname, "../", "views", "add-user.html"));
});

router.post("/users", (req, res, next) => {
 console.log(req.body);
 res.send(req.body);
});

module.exports = router;