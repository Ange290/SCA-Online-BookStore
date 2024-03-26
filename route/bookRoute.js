const express =require('express');
const route = express.Router();
const bookController = require('../controller/book_controller.js');

route.post("/api/create", bookController.createBook);
route.get("/api/title/:title", bookController.getByTitle);
route.get("/api/author/:author", bookController.getByAuthor);
route.get("/api/genre/:genre", bookController.getByGenre);

module.exports = route;