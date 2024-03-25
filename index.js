const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express)

//create server
const port = process.env.PORT || 5000;
const db =process.env.MODULE_URL
mongoose.connect(db)
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}.`)
})