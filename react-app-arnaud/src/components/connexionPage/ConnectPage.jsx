import { useState } from "react";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Style from "./ConnectPage.module.css"

const ConnectPage = () => {

    // Permet de changer le form (signIn/SignUp)
    const [modal,setModal] = useState(true);

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
                className={!modal ? `${Style.btn1} ${Style.btnSignUp} ${Style.isClick}` : `${Style.btn1} ${Style.btnSignUp} ${Style.isClickOtherTrue}`}>Inscription
            </button>
            <button onClick={handelClick} 
                className={!modal ? `${Style.btn2} ${Style.btnSignIn} ${Style.isClickOtherFalse}`: `${Style.btn2} ${Style.isClick}`}>Connection
            </button>
        </div>
        <div>
            { modal ? <SignUp />  : <SignIn />}
        </div>
    </section>
    </>
    );
}
 
export default ConnectPage;