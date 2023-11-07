import { useState } from "react";
import googleSign from "../assets/VS53t.png";
import {BsFillChatDotsFill} from "react-icons/bs"

const Header = () => {
    const [user, setUser] = useState(false);

    const logOut = () => {
        setUser(false);
    }
    const googleLogIn = () => {
        setUser(true);
    }


    return ( 
        <div className="header container p-5">
            <div> <BsFillChatDotsFill/> Chat Clone</div>
             {user ? (<button onClick={logOut} className="log-out" type="button" >Log Out</button>) : (
            <button className="login">
                <img className="login-img" onClick={googleLogIn} src={googleSign} alt="sign in with google" type="button" />
            </button>
        )}
    </div>
     );
}
 
export default Header;