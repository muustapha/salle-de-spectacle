import { useEffect, useState } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import style from './AllCard.module.css';
import Card from './card/Card';

const AllCard = () => {

    const [allSalle, setAllSalle] = useState([]);

    useEffect(() => {
        axios
            .get("https://localhost:44371/api/Salles/GetAllResearched")
            .then((res) => setAllSalle(res.data))
            .catch((err) => console.log('Pas de GetAll' + err))
    }, [])


    return ( 
    <>
        <div className={style.div}>
            <div className={style.divCard}>
                <button className={style.btnAdd}>
                    <FontAwesomeIcon icon={faPlus} className={style.icon}/>
                 </button>
            </div>
            {
                allSalle.map((salle) => {
                    return <Card {...salle}  key={salle.id}/>
                })
            }
            
        </div>
    </> );
}
//nom={salle.nom} ville={salle.ville} capacite={salle.capacite} styles={salle.styles}
 
export default AllCard;