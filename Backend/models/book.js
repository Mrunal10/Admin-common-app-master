const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const schema = mongoose.Schema;

const BookSchema = new schema({
    title: {
        type: String,
        unique: false,
        lowercase: true,
        trim: true,
        required: [true, 'Please provide a title'],
        match: [/[a-zA-Z]{2,}/, 'Please provide a valid title'],
        index: true,
        unique: true
    },
    category: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'Please provide a Category'],
        match: [/[a-zA-Z]{2,}/, 'Please provide a valid Category'],
        index: true
    },
    isbn: {
        type: Number,
        required: [true, 'Please provide a ISBN'],
    
    },
    price: {
        type: Number,
        required: [true, 'Please provide a Price'],
    },
    publishDate: {
        type: Date,
        required: [true, 'Please provide a Publish Date'],
    },

    authors: {
        type: String,
        lowercase: true,
        trim: true,
        required: [true, 'Please provide a Author'],
        match: [/[a-zA-Z]{4,}/, 'Please provide a valid Author'],
        index: true
    },

    discount: {
        type: Number,
        default: 0
    },

    available: {
        type: Number,
        default:0
    }
});
BookSchema.index({title: 'text', category: 'text', author: 'text'});



const Book = new mongoose.model('book', BookSchema);
module.exports = Book;