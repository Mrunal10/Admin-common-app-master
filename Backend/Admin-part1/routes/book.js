const express = require('express');
const router = express.Router();
const { addBook, fetchAllBook} = require('../controllers/book');
const { protect, authorize } = require('../../middleware/auth');
var advancedFind = require('../middleware/Advancedfind');
const Book = require('../../models/book');


router.route('/')
    .get(protect,authorize('admin'), advancedFind(Book), fetchAllBook)
    .post(/*protect, authorize(),*/ addBook)



module.exports = router;