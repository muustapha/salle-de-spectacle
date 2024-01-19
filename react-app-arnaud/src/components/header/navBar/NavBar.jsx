import { useNavigate } from "react-router-dom";
import style from "./NavBar.module.css"
import PropTypes from "prop-types";

const NavBar = ({menu}) => {

    let navigate = useNavigate();

    const test = (e) => {
        let path;
        switch(e.target.dataset.menu) {
            case "accueil":
                path = "/";
                navigate(path);
                break;
            case "connexion":
                path = "/connexion";
                navigate(path);
                break;
            case "profile":
                path = "/profil"
                navigate(path);
                break;
            default:
                path = "/";
                navigate(path);
        }
        
    }


    return ( 
    <>
        <div className={menu ? style.navDisplay :  style.navHide }>
            <a className={style.a} data-menu="accueil" onClick={test}>Accueil</a>
            <a className={style.a} data-menu="connexion" onClick={test}>Connexion</a>
            <a className={style.a} data-menu="profile" onClick={test}>Profile</a>
        </div>
    </> );

}
NavBar.propTypes = {
    menu: PropTypes.bool.isRequired ,
  };
 
export default NavBar;