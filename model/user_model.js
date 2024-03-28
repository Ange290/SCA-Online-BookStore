const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, unique: true },
    email: { type: String, unique: true },
    password: { type: String, unique: true },
    num: { type: String, unique: true },
    reg_time: {
       type: Date,
       default: Date.now,
    },
});

const userModel = mongoose.model('Users', userSchema);
module.exports = userModel;