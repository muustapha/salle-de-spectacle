import style from "./HeaderMobile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';

const HeaderMobile = () => {
    return ( 
        <>
            <header className={style.header}>
                <h1 className={style.h1}>Gestion Salle</h1>
                <button className={style.btn}>
                    <FontAwesomeIcon icon={faBars} className={style.icon} />
                </button>
            </header>
        </>
    );
}
 
export default HeaderMobile;