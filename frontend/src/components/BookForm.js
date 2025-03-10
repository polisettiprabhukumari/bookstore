import { useState } from "react";
import { addBook } from "../services/bookService";

const BookForm = ({ onAdd }) => {
    const [book, setBook] = useState({ title: "", author: "", price: "" });

    const handleChange = (e) => {
        setBook({ ...book, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addBook(book);
        onAdd();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="title" placeholder="Title" onChange={handleChange} />
            <input name="author" placeholder="Author" onChange={handleChange} />
            <input name="price" placeholder="Price" onChange={handleChange} />
            <button type="submit">Add Book</button>
        </form>
    );
};

export default BookForm;
