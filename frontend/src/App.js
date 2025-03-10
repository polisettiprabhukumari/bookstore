import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
    return (
        <div>
            <h1>Bookstore</h1>
            <BookForm onAdd={() => window.location.reload()} />
            <BookList />
        </div>
    );
}

export default App;
