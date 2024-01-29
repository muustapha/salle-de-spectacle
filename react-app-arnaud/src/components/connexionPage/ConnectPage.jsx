import { useState } from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Style from "./ConnectPage.module.css"

const ConnectPage = () => {

    // Permet de changer le form (signIn/SignUp)
    const [modal,setModal] = useState(false);

    const handelClick = () => {
        if (modal) {
            setModal(false)
        } else {
            setModal(true)
        }
    }

    return (  
    <>
    <section className={Style.section}>
        <div className={Style.divBtn}>
            <button onClick={handelClick} 
                className={!modal ? `${Style.btn} ${Style.btnSignUp} ${Style.isClick}` : `${Style.btn} ${Style.btnSignUp} ${Style.isClickOtherTrue}`}>Inscription
            </button>
            <button onClick={handelClick} 
                className={!modal ? `${Style.btn} ${Style.btnSignIn} ${Style.isClickOtherFalse}`: `${Style.btn} ${Style.isClick}`}>Connection
            </button>
        </div>
        <div>
            { modal ? <SignIn /> : <SignUp /> }
        </div>
    </section>
    </>
    );
}
 
export default ConnectPage;