import { useNavigate } from 'react-router-dom';
import style from './Card.module.css'
import PropTypes from 'prop-types';


const Card = ({id, nom, ville, capacite, styles}) => {

    const displayStyle = () => {
        let s ="";
        styles.forEach(element => {
            s += element + " ";
        });
        return s;
    }

    let navigate = useNavigate();

    const handelClick = (e) => {
        let path = `/detail-salle/id?${e.target.dataset.salle}`;

        navigate(path);
    }

    return ( 
    <>
        <div className={style.div}>
            <h3 className={style.h3}>{nom}</h3>
            <p className={style.p}>Localisation : {ville}</p>
            <p className={style.p}>Style(s) : {displayStyle()}</p>
            <p className={style.p}>Capacités : {capacite} personnes</p>
            <button className={style.btn} data-salle={id} onClick={handelClick}>Détails</button>
        </div>
    </> );
}
Card.propTypes = {
    id: PropTypes.number.isRequired,
    nom: PropTypes.string.isRequired,
    ville: PropTypes.string.isRequired,
    capacite: PropTypes.number.isRequired,
    styles : PropTypes.array.isRequired,
  }; 

export default Card;