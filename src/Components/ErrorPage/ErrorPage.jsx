import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className=" mx-auto flex flex-col justify-center items-center">
            <h3 className="text-3xl text-center text-red-500 mt-[300px] mb-10">Oops!! <br />not found page</h3>
            <Link to="/" className="text-xl font-bold items-center bg-green-400 p-2 border border-green-600 rounded-2xl">Go Back Home</Link>
        </div>
    );
};

export default ErrorPage;