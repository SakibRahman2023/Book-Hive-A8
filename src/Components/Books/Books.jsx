import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])
    return (
        <div>
            <div>
                <h3 className="text-center text-4xl font-bold  playfair">Books</h3>
                <p className="text-center text-lg font-medium text-[#131313CC] pt-3 mb-14">Enter the realm of books, where imagination knows no bounds. Explore worlds,<br /> learn truths, and embark on adventures through the power of storytelling.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;