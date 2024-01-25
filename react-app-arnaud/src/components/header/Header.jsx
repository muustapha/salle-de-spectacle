import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import NavBar from "./navBar/NavBar";

const Header = () => {

  const [menu, setMenu] = useState(false);
  
window.addEventListener('resize', () => {
   if (window.innerWidth >= 1200) {
    setMenu(true);
   }
})


if (menu) {
    document.body.style.overflowY = "hidden";
} else {
    document.body.style.overflowY = "auto";
}


    return ( 
        <>
            <header className={style.header}>
                <h1 className={style.h1}>Gestion Salle</h1>
                <button className={style.btn} onClick={() => !menu ? setMenu(true) : setMenu(false)}>
                    {!menu ? <FontAwesomeIcon icon={faBars} className={style.icon} /> : <FontAwesomeIcon icon={faTimes} className={style.icon} />}
                </button>
                <NavBar menu={menu} />
            </header>
        </>
    );
}
 
export default Header;