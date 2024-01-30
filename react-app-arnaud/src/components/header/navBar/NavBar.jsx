import { useContext } from "react";
import style from "./NavBar.module.css"
import PropTypes from "prop-types";
import { UserContext } from '../../context/UserContext';

const NavBar = ({menu}) => {
 
let { token } = useContext(UserContext)

    const handleClick = (e) => {
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
                case "deconnexion":
                    path = "/"
                    window.location = path;
                    break;
            default:
                path = "/";
                window.location = path;
        }
        
    }

    const logOut = () => {
        localStorage.clear();
    }


    return ( 
    <>
        <nav className={menu ? style.navDisplay :  style.navHide }>
            <a className={style.a} data-menu="accueil" onClick={(e) => handleClick(e)}>Accueil</a>
            {
                (token == null) ? <a className={style.a} data-menu="connexion" onClick={(e) => handleClick(e)}>Connexion</a> : <a className={style.a} data-menu="deconnexion" onClick={(e) => {handleClick(e); logOut()}}>Déconnexion</a>
            }
            
            <a className={style.a} data-menu="profile" onClick={(e) => handleClick(e)}>Profile</a>
        </nav>
    </> );

}
NavBar.propTypes = {
    menu: PropTypes.bool.isRequired ,
  };
 
export default NavBar;