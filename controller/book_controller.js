


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
    
}
module.exports= bookController;