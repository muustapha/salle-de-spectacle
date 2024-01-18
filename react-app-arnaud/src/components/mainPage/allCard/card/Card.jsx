import style from './Card.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Card = () => {
    return ( 
    <>
        <div className={style.div}>
            <button className={style.btnAdd}>
            <FontAwesomeIcon icon={faPlus} className={style.icon}/>
            </button>
        </div>
        <div className={style.div}>
            <h3 className={style.h3}>AJMI Jazz Club</h3>
            <p className={style.p}>Localisation : Avignon</p>
            <p className={style.p}>Style(s) : jazz soul blues</p>
            <p className={style.p}>Capacités : 400 personnes</p>
            <button className={style.btn}>Détails</button>
        </div>
    </> );
}
 
export default Card;