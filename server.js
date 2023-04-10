/** @format */

// Dependendcies
const express = require("express");
const adminRoute = require("./routes/admin.js");
const usersRoute = require("./routes/users.js");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin', adminRoute);
app.use('/users',usersRoute);
app.use((req, res, next) => {
 res.status(404).sendFile(path.join(__dirname, '/views', '404.html'));
});

// Server Loop
app.listen(3000);
