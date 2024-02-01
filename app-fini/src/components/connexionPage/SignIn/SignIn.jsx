import { useState } from "react";
import style from "./SignIn.module.css";
import axios from "axios";
import { AuthSignIn } from "../../../Models/Auth";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";


const SignIn = () => {

    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("")
    const [isClick, setIsCLick] = useState(false);

    const [errors, setErrors] = useState (true)

    const { updateUserContext } = useContext(UserContext);

    const navigate = useNavigate();

    const handelClick = async (e) => {
        e.preventDefault();

        if (mail.length > 0 && password.length > 0) {
            const login = new AuthSignIn(mail, password)
            
            await axios
                    .post(`${import.meta.env.VITE_REACT_APP_API_URL}Auth/SignIn`, login)
                    .then((res) => {
                        let path = "/";
                        setErrors(false);
                        localStorage.setItem("UserRole", JSON.stringify(res.data.isAdmin));
                        localStorage.setItem("UserToken", JSON.stringify(res.data.token));
                        putIntoContext();
                        navigate(path);})
                    .catch((err) => {
                        setErrors(true);
                        console.log("pas connecté" + err);
                    })
        } else {
            setErrors(true);
        }
    }

    const putIntoContext = () => {
        const userRole = localStorage.getItem('UserRole');
        const userToken = localStorage.getItem('UserToken');
        
        if (userRole && userToken) {
            let token = userToken.substr(1)
            token = token.slice(0,-1)
            updateUserContext("token", token);
            updateUserContext("role", userRole);
        }
    }

    return ( 
    <>
        <form className={style.form}>
            {
                (errors && isClick) && <p className={style.badText}>Adresse mail ou mot de passe invalide.</p>
            }
        <div className={style.div}>
                <label className={style.label} htmlFor="mail">Mail </label>
                <input 
                    className={style.input} 
                    type="text" 
                    id="mail"
                    onChange={(e) => {setMail(e.target.value)}}
                    />
            </div>
            <div className={style.div}>
                <label className={style.label} htmlFor="password">Mot de passe </label>
                <input 
                    className={style.input} 
                    type="password" 
                    id="password"
                    onChange={(e) => {setPassword(e.target.value)}}
                    />
            </div>
            <div className={style.div}>
                <button 
                    onClick={(e) => {setIsCLick(true); handelClick(e)}} 
                    className={style.btn}
                    >Valider</button>
            </div>
        </form>
    </> );
}
 
export default SignIn;