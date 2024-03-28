const express= require('express');
const routes = express.Router();
const UserController = require('../controller/user_controller.js');

routes.post("/user/create", UserController.UserRegistration);
routes.get("/user/get", UserController.getUser)
module.exports = routes;