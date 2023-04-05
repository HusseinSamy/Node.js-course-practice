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
app.use((req, res, next) => {
 res.status(404).send("<h1>404 - Page is not found.<h1/>");
});

// Server Loop
app.listen(3000);
