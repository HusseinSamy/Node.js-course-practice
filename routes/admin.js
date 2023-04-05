/** @format */

const express = require("express");
const router = express.Router();

router.get("/add-user", (req, res, next) => {
 res.send(
  "<form method='POST' action='/users'><input type='text' name='username'><button type='submit'>Sumbit</button></form>"
 );
});
router.post("/users", (req, res, next) => {
 console.log(req.body);
 res.redirect("/");
});

module.exports = router;