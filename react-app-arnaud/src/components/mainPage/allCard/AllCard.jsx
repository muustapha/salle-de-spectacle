import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import style from './AllCard.module.css';
import Card from './card/Card';
import { SearchContext } from '../../context/SearchContext';

const AllCard = () => {
    //Récup du context
    let { nom, ville, styles } = useContext(SearchContext);
    
    const [allSalle, setAllSalle] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_REACT_APP_API_URL}Salles/GetAllResearched?nomRecherche=${nom}&villeRecherchee=${ville}&styleRecherche=${styles}`)
            .then((res) => setAllSalle(res.data))
            .catch((err) => console.log('Pas de GetAll' + err))
    }, [allSalle])
       
            
    // console.log(searchData);


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
 
export default AllCard;