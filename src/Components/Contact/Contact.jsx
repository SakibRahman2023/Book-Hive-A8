
import { CiFacebook } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Contact = () => {
    return (
        <div>
            <h3 className="text-center text-3xl text-green-500 font-bold mb-8">Hello Users</h3>
           <div>
                <p className="text-center">"Have a question or suggestion? Want to join our hive of readers? <br />Reach out to us! Whether you're seeking literary recommendations or collaboration opportunities, our door is 
                    always open. Drop us a line at <span className="text-green-500 font-bold">bookhive@gmail.com</span> or give us a buzz at <span className="text-green-500 font-bold"> 0161070000</span>. We can't wait to hear from you!"</p>
                    <hr className="border border-dashed my-5" />
                    <div className="flex justify-center gap-5 text-2xl mt-6">
                    <a className="hover:bg-blue-500 p-1 rounded-full text-3xl" href=""><CiFacebook></CiFacebook></a>
                    <a className="hover:bg-slate-400 p-1 rounded-full" href=""><BsTwitterX></BsTwitterX></a>
                    <a className="hover:bg-red-300 p-1 rounded-full" href=""><FaInstagram></FaInstagram></a>
                    <a className="hover:bg-slate-400 p-1 rounded-full" href=""> <FaGithub></FaGithub></a>
                    </div>
           </div>
        </div>
    );
};

export default Contact;