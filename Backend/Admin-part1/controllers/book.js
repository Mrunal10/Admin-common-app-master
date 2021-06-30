
const Book = require('../../models/book');
const asyncHandler = require('../../middleware/async');
const bcrypt = require('bcrypt');


const fetchAllBook = asyncHandler(async (req, res) => {
    res.status(200).json(res.advancedResults)
})

const addBook = asyncHandler(async (req, res, next) => {
    //Operatons on model

    let book = await Book.create(req.body);
    console.log(book);
    if(!book) res.json({ success: false, message:"Book is not added" });
    else res.status(201).json({ success: true, data: book,message:"Book is added successfully" });
})

module.exports = {addBook, fetchAllBook};