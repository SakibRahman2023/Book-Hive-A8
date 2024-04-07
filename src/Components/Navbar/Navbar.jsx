
import { NavLink } from "react-router-dom";
import { PiBookOpenDuotone } from "react-icons/pi";



const Navbar = () => {
    const links = <>
        <li className="text-lg font-semibold"><NavLink to="/">Home</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/Listed">Listed Book</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/Read">Pages to Read</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/about">About</NavLink></li>
        <li className="text-lg font-semibold"><NavLink to="/contact">Contact Us</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-4xl font-bold text-green-500 ">Book<span><PiBookOpenDuotone /></span>Hive</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-5 hidden md:block">
                <a className="py-2 mr-5 px-3 text-lg font-semibold text-white bg-green-500 rounded-xl">Sign In</a>
                <a className="py-2 px-3 text-lg font-semibold text-white bg-[#59C6D2] rounded-xl">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;
