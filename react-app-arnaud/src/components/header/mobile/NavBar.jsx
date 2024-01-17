import style from "./NavBar.module.css"

const NavBar = () => {
    return ( 
    <>
        <div className={style.nav}>
            <a className={style.a}>Accueil</a>
            <a className={style.a}>Connexion</a>
            <a className={style.a}>Profile</a>
        </div>
    </> );
}
 
export default NavBar;