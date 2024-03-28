
const BookModel = require("../model/bookstore_Model.js");

const  bookController={
    createBook : async(req,res)=>{
        try {
            //   const newStudent = await studentModel.create(req.body)
            const createBookstore = await BookModel.create(req.body);
            res.status(201).json({message:'Book Created Successfully', book: createBookstore});
        } catch (error) {
            res.status(500).json({message:'Error in Creating', error: error.message})
        }
    },

//get allbook
getAllBook: async(req,res)=>{
try {
    const getAll = await BookModel.find()
    res.status(200).json({message:'Order History and detail of past purchase', getAll});
} catch (error) {
    res.status(500).json({message:'Error in getting all', error})
}
},

    // getBytitle
    getByTitle:async(req,res)=>{
        try {
            const titles = ({title: req.params.title})
            const ByTitle = await BookModel.findOne(titles);
           res.status(200).json({message:`The book : ${titles.title}`, book: ByTitle});
        } catch (error) {
            res.status(500).json({message:'Error in Search by title', book: error})
        }
    },
    //get by author
    getByAuthor:async(req,res)=>{
        try {
            const authors = ({author: req.params.author})
            const ByAuthors = await BookModel.findOne(authors);
            res.status(200).json({message:`The Author : ${authors.author}`, book: ByAuthors});
        } catch (error) {
            res.status(500).json({message:'Error in Search by Author', book: error})
        }
    },
       //get by genre
  
    getByGenre: async (req, res) => {
        try {
            const genres = req.params.genre.split(','); // Assuming genres are comma-separated in the request
            const books = await BookModel.find({ genre: { $in: genres } }); // Use $in operator to match any genre in the array
            res.status(200).json({ message: `Books with genres: ${genres.join(', ')}`, books: books });
        } catch (error) {
            res.status(500).json({ message: 'Error in Search by Genre', error: error });
        }
    },
    //UpdateBook

    updateBook: async(req,res)=>{
        try {
            const titled = ({title:req.params.title})
            const{author, genre, price, availability}= req.body
            const updated ={author, genre, price, availability}
            const updatedBook = await BookModel.findOneAndUpdate(titled,updated,{new: true})
            if(!updatedBook){
                res.status(500).json({message:'Book not found'});
            }
            else{
                res.status(200).json({message:'Book Updated Successfully', book: updatedBook});
            }
        } catch (error) {
            res.status(500).json({message:'Error in updating book', book: error});
        }
    },

    //delete Book
    deleteBook: async(req,res)=>{
        try {
            const titley = ({title: req.params.title});
            const deletedBook = await BookModel.findOneAndDelete(titley);
            if(!deletedBook){
                res.status(500).json({message:'Book not found'});
            }
            else{
            res.status(200).json({message:'Book Deleted Successfully', book: deletedBook});
            }
        } catch (error) {
            res.status(500).json({message:'Error in Deleting book', book:error})
        }
    }
    
}
module.exports= bookController;