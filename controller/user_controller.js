const mongoose = require('mongoose');
const userModel = require('../model/user_model.js');
const bcrypt = require('bcrypt');
const UserController ={
    UserRegistration : async(req,res)=>{
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 10);
            const user= new userModel({
                name:req.body.name,
                email: req.body.email,
                password: hashedPassword,
                num:req.body.num,
            });
            const savedUser = await user.save();
            res.status(201).json({message:'User Created Successfully'});
        } catch (error) {
           res.status(500).json(error) 
        }
    }
}
module.exports = UserController;