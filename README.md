# SCA-Online-BookStore

## Introduction
This README provides advanced backend Online-Bookstore application implemented in a JavaScript  using Express framework, Node.js, and MongoDB. This application includes a structured architecture with separate folders for models, controllers, and routes, facilitating efficient development and maintenance.

## Prerequisites
Before testing the application, ensure the following prerequisites are met:

Node.js and npm installed on your machine.
MongoDB installed and running locally or on a remote server.
Postman or any REST API client for testing APIs.

## Setup
Clone the repository to your local machine.

## Testing the Application
### 1. Start the Server
Execute the following command to start the server:
--npm run dev--

### 2. Testing Operations
Use Postman or any REST API client.
 #### Create Book to Shopping Cart
Make a POST request to localhost:3000/api/create with the required parameters in the request body.
#### Search Book
Make a GET request to localhost:3000/api/title/:title to retrieve a specific book by its Title.
Make a GET request to localhost:3000/api/author/:author to retrieve a specific book by its Author name.
Make a GET request to localhost:3000/api/genre/:genre to retrieve a specific book by its genre.
Make a GET request to localhost:3000/api/all to view order history and detailsof past purchases.

#### Update Books
Make a PATCH request to localhost:3000/api/update/:title with the book title in the URL and the updated data in the request body.

#### Delete Books
Make a DELETE request to localhost:3000/api/delete/:title with the book title in the URL to delete a specific book.

### Database Used: MongoDB
#### Why MongoDB?
Schema Flexibility: MongoDB's document model allows flexible schemas, making it suitable for applications with evolving data requirements.
Scalability: MongoDB's distributed architecture enables seamless horizontal scaling, accommodating growing datasets and user bases.
JSON-like Documents: MongoDB stores data in JSON-like documents, aligning well with JavaScript objects, simplifying data manipulation and integration.
Expressive Query Language: MongoDB's query language provides powerful and expressive operations, facilitating efficient data retrieval and manipulation.

## Conclusion
This README provides detailed instructions for testing the Express & MongoDB CRUD application. By following these steps, you can effectively evaluate the application's functionality and understand the rationale behind using MongoDB as the database solution. For further assistance or inquiries, refer to the project documentation or contact the developers.
