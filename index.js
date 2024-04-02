const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = require('./route/bookRoute.js');
// const bcrypt = require('bcrypt');

app.use(express.json())
app.use(route);



const port = process.env.PORT || 5000;
//const db = "mongodb://localhost:27017/SCA-Online-Bookstore";

mongoose.connect("mongodb://localhost:27017/SCA-Online-Bookstore")
 .then(() => {
    console.log("Successfully connected to the database.");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}.`);
    });
 })
 .catch(err => {
    console.error("Error connecting to the database:", err);
 });