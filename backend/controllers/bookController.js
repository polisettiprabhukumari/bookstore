const Book = require("../models/Book");

// Fetch all books
const getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

// Add a book
const addBook = async (req, res) => {
    const book = new Book(req.body);
    await book.save();
    res.status(201).json(book);
};

// Delete a book
const deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
};

module.exports = { getBooks, addBook, deleteBook };
