const BookSchema = require('./book');
const mongoose = require("mongoose");

const schema = mongoose.Schema;

const AuthorSchema = new schema({
    name: {
        type: String,
        required: [true, 'Please provide a author name'],
    },
    books: {
        type: String
       
    }
   
})

module.exports = AuthorSchema;