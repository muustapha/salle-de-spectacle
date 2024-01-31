import { useState } from "react";
import Style from "./SignUp.module.css"
import { AuthSignUp } from "../../../Models/Auth";
import axios from "axios";

const SignUp = () => {

    const [pseudo, setPseudo] = useState("");
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [isClick, setIsCLick] = useState(false);

    const [errors, setErrors] = useState ({
        errorPseudo: true,
        errorMail: true,
        errorPassword: true,
        errorComfirmPassword: true
    })

    const REGEX_CHECK_LETTRE = /^[a-zA-Z].{3,20}$/;
    const REGEX_CHECK_MAIL = /^(?!\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2,})?$/;
    const REGEX_CHECK_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,}$/;

    const checkInput = (value, regex) => {
        return regex.test(value) && value != "";
    }

    const checkValidity = (value, regex, node) => {
        if (checkInput(value, regex)) {
            setErrors((elemnt) => ({
                ...elemnt,
                [node]: false
            }));
        } else {
            setErrors((elemnt) => ({
                ...elemnt,
                [node]: true
            }));
        }
    }

    const checkSamePassword = (value, node) => {
        if (password == value) {
            setErrors((elemnt) => ({
                ...elemnt,
                [node]: false
            }));

        } else {
            setErrors((elemnt) => ({
                ...elemnt,
                [node]: true
            }));
        }
    }

    const handelClick = async (e) => {
        e.preventDefault();

        if (!errors.errorPseudo && !errors.errorMail && !errors.errorPassword && !errors.errorComfirmPassword) {
            const newUser = new AuthSignUp(pseudo, mail, password);

            await axios
                    .post(`${import.meta.env.VITE_REACT_APP_API_URL}Auth/SignUp`, newUser)
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err + "Pas d'inscription"))
            
        } else {
            console.log("Bad Request");
        }
    }

    return ( 
    <>
        <form className={Style.form}>
            <div className={Style.div}>
                <label className={Style.label} htmlFor="pseudo">Pseudo </label>
                <input 
                    className={Style.input} 
                    type="text" 
                    id="pseudo"
                    onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_LETTRE, "errorPseudo"); setPseudo(e.target.value)}}
                    />
                {
                    (errors.errorPseudo && isClick) && <p className={Style.badText}>Veuillez entrer un pseudo valide.</p>
                }
            </div>
            <div className={Style.div}>
                <label className={Style.label} htmlFor="mail">Email </label>
                <input 
                    className={Style.input} 
                    type="email" 
                    id="mail"
                    onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_MAIL, "errorMail"); setMail(e.target.value)}}/>
                {
                    (errors.errorMail && isClick) && <p className={Style.badText}>Veuillez entrer un mail valide.</p>
                }
            </div>
            <div>
                <div className={Style.div}>
                    <label className={Style.label} htmlFor="password">Mot de passe </label>
                    <input 
                        className={Style.input} 
                        type="password" 
                        id="password"
                        onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_PASSWORD, "errorPassword"); setPassword(e.target.value)}} />
                    {
                        (errors.errorPassword && isClick) && <p className={Style.badText}>Veuillez entrer un mot de passe valide.</p>
                    }
                </div>
                <div className={Style.div}>
                    <label className={Style.label} htmlFor="comfirmPassword">Confirmer mot de passe </label>
                    <input 
                        className={Style.input} 
                        type="password" 
                        id="comfirmPassword"
                        onChange={(e) => {checkSamePassword(e.target.value, "errorComfirmPassword");}} />
                    {
                        (errors.errorComfirmPassword && isClick ) && <p className={Style.badText}>Les mots de passe ne correspondent pas.</p>
                    }
                </div>
            </div>
            <div className={Style.div}>
                <button onClick={(e) => {setIsCLick(true); handelClick(e)}} className={Style.btn}>Valider</button>
            </div>
        </form>
    </> );
}
 
export default SignUp;