/** @format */
const { log } = require("console");
const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
 console.log("Hello World From the second server using Express");
 res.send("what are you doing?");
});
app.use(
 "/",
 (req, res, next) => {
  console.log("Hello World From the first server using Express");
  next();
 },
 (req, res, next) => {
  console.log("This is the second middleware in the / route");
  res.send("I have done what you want");
 }
);
app.listen(3000);
