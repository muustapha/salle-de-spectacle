import style from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import NavBar from "./navBar/NavBar";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [isClick, setIsClick] = useState(false);



  if (isClick) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  useEffect(() => {
    if (window.innerWidth >= 1200) {
      setMenu(true);
    } else {
      setMenu(false)
    }
  }, [menu])


  return (
    <>
      <header className={style.header}>
        <h1 className={style.h1}>Gestion Salle</h1>
        <button
          className={style.btn}
          onClick={() => {
            !menu ? setMenu(true) : setMenu(false);
            !isClick ? setIsClick(true) : setIsClick(false)
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
