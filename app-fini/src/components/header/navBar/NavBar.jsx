import { useContext, useEffect } from "react";
import style from "./NavBar.module.css"
import PropTypes from "prop-types";
import { UserContext } from '../../context/UserContext';
import { useNavigate } from "react-router-dom";

const NavBar = ({menu, setMenu, setIsClick}) => {
 
    let { token } = useContext(UserContext)
    const { updateUserContext } = useContext(UserContext);

    let navigate = useNavigate()

    const handleClick = (e) => {
        let path;
        switch(e.target.dataset.menu) {
            case "accueil":
                path = "/";
                navigate(path);
                setMenu(false);
                setIsClick(false)
                break;
            case "connexion":
                path = "/connexion";
                navigate(path);
                setMenu(false);
                setIsClick(false)
                break;
            case "profile":
                path = "/profil"
                navigate(path);
                setMenu(false);
                setIsClick(false)
                break;            
            case "deconnexion":
                path = "/"
                navigate(path);
                setMenu(false);
                setIsClick(false)
                break;
            default:
                path = "/";
                navigate(path);
                setMenu(true);
        }
        
    }

    useEffect(() => {
        if (window.innerWidth >= 1200) {
            setMenu(true);
          } else {
            setMenu(false)
          }
    }, [])

    const logOut = () => {
        localStorage.clear();
        updateUserContext("token", null)
        updateUserContext("role", "false")
    }

    return ( 
    <>
        <nav className={menu  ? style.navDisplay :  style.navHide }>
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
    setMenu: PropTypes.func.isRequired ,
    setIsClick: PropTypes.func.isRequired ,
  };
 
export default NavBar;