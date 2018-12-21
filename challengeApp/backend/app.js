const path = require("path");
const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");
const challengesRoutes = require("./routes/challenge");

const app = express();

mongoose
    .connect("mongodb+srv://david:hieYkgzvV5W85eKn@cluster0-le9rb.mongodb.net/challengeAppLocalTest")
    .then(() => {
        console.log("Connected to database!");
    })
    .catch(() => {
        console.log("Connection failed!");
    });
    
app.use(bodyParser.json());

//allows the requests to reach the image folder
//the path thing forwards requests to /images to backend/images
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {

    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next();
})

app.use("/api/user", userRoutes);
app.use("/api/challenges", challengesRoutes);

module.exports = app;