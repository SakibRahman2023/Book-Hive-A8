import { useEffect, useState } from "react";
import { getStoredBook, saveBooks } from "../localstorage/LocalStroage";
import { getStoredBookWish, saveBooksWish } from "../localstorage/loacalStroageWish";
import { FaAngleDown } from "react-icons/fa";
import './list.css'
import { CiLocationOn } from "react-icons/ci";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const ListedBook = () => {
    const books = useLoaderData();
    const [listBook, setListBook] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [activeTab, setActiveTab] = useState("Read List");
    const [sortBy, setSortBy] = useState(""); // State to track sorting option

    useEffect(() => {
        const storedBookIds = getStoredBook();
        if (books.length > 0) {
            const booksListed = [];
            for (const id of storedBookIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    booksListed.push(book);
                }
            }
            setListBook(booksListed);
        }

        const storedWishlistIds = getStoredBookWish();
        if (books.length > 0) {
            const wishlistBooks = [];
            for (const id of storedWishlistIds) {
                const book = books.find(book => book.bookId === id);
                if (book) {
                    wishlistBooks.push(book);
                }
            }
            setWishlist(wishlistBooks);
        }
    }, [books]);

    // Function to handle sorting
    const handleSort = (option) => {
        setSortBy(option);
    };

    const compareFunction = (a, b) => {
        switch (sortBy) {
            case "Rating":
                return a.rating - b.rating;
            case "Number of Pages":
                return a.totalPages - b.totalPages;
            case "Publication Year":
                return a.yearOfPublishing - b.yearOfPublishing;
            default:
                return 0;
        }
    };

    const filteredBooks = activeTab === "Read List" ? listBook : wishlist;
    const sortedBooks = sortBy ? [...filteredBooks].sort(compareFunction) : filteredBooks;

    return (
        <div>
            <h1 className="w-full text-center text-3xl font-bold py-3 bg-slate-100 rounded-xl">Books</h1>
            <div>
                <details className="dropdown flex justify-center mb-24">
                    <summary className="m-1 btn bg-green-400 text-white">Sort By <span><FaAngleDown /></span></summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleSort("Rating")}>Rating</button></li>
                        <li><button onClick={() => handleSort("Number of Pages")}>Number of pages</button></li>
                        <li><button onClick={() => handleSort("Publication Year")}>Publication Year</button></li>
                    </ul>
                </details>
            </div>

            <div>
                <div role="tablist" className="tabs tabs-lifted w-1/2">
                    <a role="tab" className={`tab ${activeTab === "Read List" ? 'tab-active' : ''}`} onClick={() => setActiveTab("Read List")}>Read List</a>
                    <a role="tab" className={`tab ${activeTab === "WishList" ? 'tab-active' : ''}`} onClick={() => setActiveTab("WishList")}>Wishlist</a>
                </div>
                {sortedBooks.map(book => (
                    <div key={book.bookId} className="border p-4 my-2">
                        <div className="card card-side ">
                            <div className="md:flex gap-5">
                                <div>
                                    <figure><img className="w-[200px] h-[200px] rounded-3xl mb-5" src={book.image} alt="Book" /></figure>
                                </div>
                                <div>
                                    <h3 className="font-bold text-2xl playfair">{book.bookName}</h3>
                                    <h3 className="font-medium text-[#131313CC]">By: {book.author}</h3>
                                    <div className="md:flex gap-5 justify-start">
                                        <p className="font-bold">Tags</p>
                                        {book.tags.map((tag, index) => (
                                            <p key={index} className="py-1 px-4 bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl">#{tag}</p>
                                        ))}
                                        <p className="text-[#131313CC] flex items-center"><span><CiLocationOn /></span>Year of Publishing:{book.yearOfPublishing}</p>
                                    </div>
                                    <div className="flex gap-5 justify-start text-[#13131399]">
                                        <p className="flex items-center"><span><MdOutlinePeopleAlt /></span> Publisher: {book.publisher}</p>
                                        <p className="flex items-center"><span><MdOutlineContactPage /></span> Pages: {book.totalPages}</p>
                                    </div>
                                    <hr className="border my-2.5" />
                                    <div className="flex gap-5 justify-start">
                                        <h2 className="py-2 px-2 bg-[#328EFF0D] text-[#328EFF] rounded-2xl">Category:{book.category}</h2>
                                        <h3 className="py-2 px-2 bg-[#FFAC330D] text-[#FFAC33] rounded-2xl">Rating:{book.rating}</h3>
                                        <Link to={`/book`}><button className="py-1 px-3 rounded-2xl bg-green-400 text-white font-bold">View Details</button></Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListedBook;
