import style from "./NavBar.module.css"
import PropTypes from "prop-types";

const NavBar = ({menu}) => {
 

    const test = (e) => {
        let path;
        switch(e.target.dataset.menu) {
            case "accueil":
                path = "/";
                window.location = path;
                break;
            case "connexion":
                path = "/connexion";
                window.location = path;
                break;
            case "profile":
                path = "/profil"
                window.location = path;
                break;
            default:
                path = "/";
                window.location = path;
        }
        
    }


    return ( 
    <>
        <nav className={menu ? style.navDisplay :  style.navHide }>
            <a className={style.a} data-menu="accueil" onClick={test}>Accueil</a>
            <a className={style.a} data-menu="connexion" onClick={test}>Connexion</a>
            <a className={style.a} data-menu="profile" onClick={test}>Profile</a>
        </nav>
    </> );

}
NavBar.propTypes = {
    menu: PropTypes.bool.isRequired ,
  };
 
export default NavBar;