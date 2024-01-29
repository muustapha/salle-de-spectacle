import Style from "./SignUp.module.css"

const SignUp = () => {
    return ( 
    <>
        <form className={Style.form}>
            <div className={Style.div}>
                <label className={Style.label} htmlFor="pseudo">Pseudo </label>
                <input className={Style.input} type="text" id="pseudo" />
            </div>
            <div className={Style.div}>
                <label className={Style.label} htmlFor="mail">Email </label>
                <input className={Style.input} type="email" id="mail"/>
            </div>
            <div>
                <div className={Style.div}>
                    <label className={Style.label} htmlFor="password">Mot de passe </label>
                    <input className={Style.input} type="password" id="password" />
                </div>
                <div className={Style.div}>
                    <label className={Style.label} htmlFor="comfirmPassword">Comfirmer mot de passe </label>
                    <input className={Style.input} type="password" id="comfirmPassword" />
                </div>
            </div>
            <div className={Style.div}>
                <button className={Style.btn}>Valider</button>
            </div>
        </form>
    </> );
}
 
export default SignUp;