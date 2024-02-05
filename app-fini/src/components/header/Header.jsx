import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import NavBar from "./navBar/NavBar";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [click, setIsClick] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1200) {
      setMenu(true);
    }
  });

  if (click) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  return (
    <>
      <header className={style.header}>
        <h1 className={style.h1}>Gestion Salle</h1>
        <button
          className={style.btn}
          onClick={() => {
            !menu ? setMenu(true) : setMenu(false);
            !click ? setIsClick(true) : setIsClick(false);
          }}
        >
          {!menu ? (
            <FontAwesomeIcon icon={faBars} className={style.icon} />
          ) : (
            <FontAwesomeIcon icon={faTimes} className={style.icon} />
          )}
        </button>
        <NavBar menu={menu} setMenu={setMenu} setIsClick={setIsClick}/>
      </header>
    </>
  );
};

export default Header;
