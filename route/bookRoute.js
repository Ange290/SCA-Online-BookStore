const express =require('express');
const route = express.Router();
const bookController = require('../controller/book_controller.js');

route.post("/api/create", bookController.createBook);
route.get("/api/title/:title", bookController.getByTitle);
route.get("/api/author/:author", bookController.getByAuthor);
route.get("/api/genre/:genre", bookController.getByGenre);
route.get("api/all",bookController.getAllBook);
route.patch("/api/update/:title", bookController.updateBook);
route.delete("/api/delete/:title", bookController.deleteBook);

module.exports = route;