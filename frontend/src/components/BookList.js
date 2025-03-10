import { useEffect, useState } from "react";
import { getBooks, deleteBook } from "../services/bookService";

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        const { data } = await getBooks();
        setBooks(data);
    };

    const handleDelete = async (id) => {
        await deleteBook(id);
        fetchBooks();
    };

    return (
        <div>
            <h2>Book List</h2>
            {books.map(book => (
                <div key={book._id}>
                    <h3>{book.title} - {book.author} (${book.price})</h3>
                    <button onClick={() => handleDelete(book._id)}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default BookList;
