import { useState } from "react";
import googleSign from "../assets/VS53t.png";
import {BsFillChatDotsFill} from "react-icons/bs"

const Navbar = () => {
    const [user, setUser] = useState(false);

    const logOut = () => {
        setUser(false);
    }
    const googleLogIn = () => {
        setUser(true);
    }


    return ( 
        <div className="">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">            
                    <a className="navbar-brand" href="#"><BsFillChatDotsFill/> ChatApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active ms-3" aria-current="page" href="#">Home</a>
                            </li>
                        </ul>
                        <button className="login">
                            <img className="login-img" src={googleSign} alt="google" />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;