/** @format */

// Dependendcies
const express = require("express");
const adminRoute = require("./routes/admin.js");
const shopRoute = require("./routes/shop.js");
const bodyParser = require("body-parser");
const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(adminRoute);
app.use(shopRoute);

// Server Loop
app.listen(3000);
