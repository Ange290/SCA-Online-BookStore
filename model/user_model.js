const mongoose = require('mongoose');

 const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    num: Number,
    reg_time: {
       type: Date,
       default: Date.now,
    },
 });
const userModel = mongoose.model('Users',userSchema);
module.exports= userModel;