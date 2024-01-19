import { useNavigate } from "react-router-dom";
import style from "./NavBar.module.css"
import PropTypes from "prop-types";

const NavBar = ({menu}) => {

    let navigate = useNavigate();

    return ( 
    <>
        <div className={menu ? style.navDisplay :  style.navHide }>
            <a className={style.a}>Accueil</a>
            <a className={style.a}>Connexion</a>
            <a className={style.a}>Profile</a>
        </div>
    </> );

}
NavBar.propTypes = {
    menu: PropTypes.bool.isRequired ,
  };
 
export default NavBar;