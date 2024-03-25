
const { json } = require('express');
const  bookStoreSchema = require('../model/bookstore_Model.js');

const  bookController={
    createBook : async(req,res)=>{
        try {
            const createBookstore = await bookStoreSchema.create(req.body);
            res.status(201).json({message: 'Book Created Successfully'}, createBookstore);
        } catch (error) {
            res.status(400).json({message: error})
        }
    },
    getAllBook: async(req,res)=>{
        try {
            const getAll = await bookStoreSchema.find()
            res.status(200).json({getAll})
        } catch (error) {
            res.status(500).json({message: error})
        }
     }//,
    // getById
}
module.exports= bookController;