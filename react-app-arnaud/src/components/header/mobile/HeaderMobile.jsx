import style from "./HeaderMobile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import NavBar from "../../navBar/mobile/NavBar";

const HeaderMobile = () => {

  const [menu, setMenu] = useState(false);

    return ( 
        <>
            <header className={style.header}>
                <h1 className={style.h1}>Gestion Salle</h1>
                <button className={style.btn} onClick={() => !menu ? setMenu(true) : setMenu(false)}>
                    {!menu ? <FontAwesomeIcon icon={faBars} className={style.icon} /> : <FontAwesomeIcon icon={faTimes} className={style.icon} />}
                </button>
            </header>
            <NavBar menu={menu} />
        </>
    );
}
 
export default HeaderMobile;