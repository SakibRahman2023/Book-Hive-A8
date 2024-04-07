import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen bg-[#13131305] rounded-xl mb-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/7pS3WST/1157.jpg" className="max-w-sm rounded-lg " />
                <div>
                    <h1 className="text-5xl font-bold playfair">Books to freshed up <br /> your bookshelf</h1>

                    <Link to="/Listed"><button className="bg-green-500 text-white font-bold text-xl py-2 px-3 rounded-xl mt-10">Veiw The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;