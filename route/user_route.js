const express= require('express');
const routes = express.Router();
const UserController = require('../controller/user_controller.js');

routes.post("/user/create", UserController.UserRegistration);

module.exports = routes;