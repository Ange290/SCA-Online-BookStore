const express = require('express');
const mongoose = require('mongoose');
const app = express();
const route = require('./route/bookRoute.js');
// const bcrypt = require('bcrypt');
const routes = require('./route/user_route.js');
app.use(express.json())
app.use(route);
app.use(routes);


//create server
const port = process.env.PORT || 3000;
const db = "mongodb://localhost:27017/SCA-Online-Bookstore";
mongoose.connect(db)
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}.`)
})