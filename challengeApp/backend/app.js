const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const challengesRoutes = require("./routes/challenge");

const app = express();

mongoose
    .connect("mongodb+srv://david:hieYkgzvV5W85eKn@cluster0-le9rb.mongodb.net/challengeApp")
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });

app.use(bodyParser.json());

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
})

app.use("/api/user", userRoutes);
app.use("/api/challenges", challengesRoutes);

module.exports = app;