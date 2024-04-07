
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
    const { bookId, image, bookName, author, category, rating, tags } = book;
    return (
        <div>
            <Link to={`/book/${bookId}`}>
                <div className="card w-auto bg-base-100 border border-[#13131326]">
                    <figure className="px-5 pt-5">
                        <img src={image} alt="Book" className="rounded-xl h-[250px] w-[300px]" />
                    </figure>
                    <div className="px-5">
                        <div className="font-medium flex gap-5 my-5">
                            {tags.map((tag, index) => (
                                <p key={index} className="py-1 px-4 bg-[#23BE0A0D] text-[#23BE0A] rounded-2xl">{tag}</p>
                            ))}
                        </div>
                        <h3 className="text-2xl font-bold playfair">{bookName}</h3>
                        <h4 className="font-medium text-[#131313CC]">By: {author}</h4>
                        <hr className="border border-dashed my-8" />
                        <div className="font-medium text-[#131313CC] flex justify-between">
                            <p>{category}</p>
                            <div className="flex gap-2 mb-10">
                                <p>{rating} </p>
                                <p className="text-2xl"><FaRegStar /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Book;