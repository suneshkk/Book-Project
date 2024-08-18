import express from 'express';
// Taking router from express for making routes
const router = express.Router();
import validateBooks from '../middlewares/validatBooks.js';

import {
    createBook,
    getAllBooks,
    getoneBook,
    updateBook,
    deleteBook
} from '../controller//booksController.js';


//route for saving book to database
router.post("/",validateBooks, createBook);
//route for get all book from database
router.get("/", getAllBooks);
//route for get one book by id from database
router.get('/:id', getoneBook);
//rote for update book for database
router.put('/:id',validateBooks, updateBook);
//rout for delete book by id database
router.delete('/:id', deleteBook);

export default router;






