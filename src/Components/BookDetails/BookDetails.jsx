
import React, { useState } from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBooks } from '../localstorage/LocalStroage';
import { saveBooksWish } from '../localstorage/loacalStroageWish'


const BookDetails = () => {
    const books = useLoaderData();
    const { bookId } = useParams();
    const id = parseInt(bookId);
    const book = books.find(book => book.bookId === id);

    const { image, bookName, author, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = book;

    const [addedToRead, setAddedToRead] = useState(false);
    const [addedToWishlist, setAddedToWishlist] = useState(false);

    const handleRead = () => {
        saveBooks(id);
        if (!addedToRead) {
            setAddedToRead(true);
            setAddedToWishlist(false);
            toast('Book Added To Read List');
        } else {
            toast('This book has already been added to the Read list');
        }
    }

    const handleWishlist = () => {
        saveBooksWish(id);

        if (!addedToWishlist && !addedToRead) {
            setAddedToWishlist(true);
            toast('Book Added To Wishlist');
        } else if (addedToWishlist) {
            toast('This book has already been added to the Wishlist');
        } else if (addedToRead) {
            toast.info(<span> You Have Already Read This Book</span>)
        }
    }

    return (
        <div>
            <div className="hero min-h-screen bg-white rounded-2xl">
                <div className="hero-content flex-col lg:flex-row gap-8">
                    <img src={image} className="max-w-xl h-[500px]  rounded-2xl" alt={bookName} />
                    <div>
                        <h1 className="text-4xl font-bold playfair">{bookName}</h1>
                        <h2 className="text-xl font-medium text-[#131313CC]">By: {author}</h2>
                        <hr className="border my-2.5" />
                        <p className="text-xl font-medium text-[#131313CC]">{category}</p>
                        <hr className="border  my-2.5" />
                        <p className="text-[#131313B3]"><span className="font-bold text-black">Review:</span> {review}</p>
                        <div className="flex items-center gap-5">
                            <p className="font-bold">Tags</p>
                            <div className="font-medium flex gap-5 my-2.5">
                                {tags.map((tag, index) => (
                                    <p key={index} className="py-1 px-4 bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl">#{tag}</p>
                                ))}
                            </div>
                        </div>
                        <hr className="border  my-2.5" />
                        <table>
                            <tbody>
                                <tr>
                                    <td className="text-[#131313B3]">Number of Pages:</td>
                                    <td className="pl-10 font-semibold text-black">{totalPages}</td>
                                </tr>
                                <tr>
                                    <td className="text-[#131313B3]">Publish:</td>
                                    <td className="pl-10 font-semibold text-black">{publisher}</td>
                                </tr>
                                <tr>
                                    <td className="text-[#131313B3]">Year of Publishing:</td>
                                    <td className="pl-10 font-semibold text-black">{yearOfPublishing}</td>
                                </tr>
                                <tr>
                                    <td className="text-[#131313B3]">Rating:</td>
                                    <td className="pl-10 font-semibold text-black">{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="mt-5">
                            <button onClick={handleRead} className="btn  bg-emerald-400">Read</button>
                            <button onClick={handleWishlist} className="btn bg-cyan-400 ml-5">Wishlist</button>
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;