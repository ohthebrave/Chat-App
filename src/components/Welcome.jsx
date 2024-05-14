import {AiOutlineMessage} from "react-icons/ai";
import phone_img from "../assets/vd-call.webp"

const Welcome = () => {
    return ( 
        <section className="" >
            <div className="d-flex flex-row mb-3">
                <div className="p-5 align-items-center" >
                    <h1> <AiOutlineMessage/> Hang out anytime, anywhere and message privately.</h1>
                    <p className="p-5 fw-lighter lh-sm text-success-emphasis">Simple, reliable, private messaging and calling for free*, available all over the world.</p>
                </div>
                <div>
                    <img className="img" src={phone_img} alt="phone" />
                </div>
            </div>
        </section>
     );
}
 
export default Welcome;