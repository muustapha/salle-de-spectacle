import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import style from './AllCard.module.css';
import Card from './card/Card';
import { SearchContext } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';

const AllCard = () => {
    //Récup du context
    let { nom, ville, styles } = useContext(SearchContext);
    let navigate = useNavigate();
    const [salleNotDelete, setsalleNotDelete] = useState([]);
    const [allSalle, setAllSalle] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_REACT_APP_API_URL}Salles/GetAllResearched?nomRecherche=${nom}&villeRecherchee=${ville}&styleRecherche=${styles}`)
            .then((res) => setsalleNotDelete(res.data))
            .catch((err) => console.log('Pas de GetAll' + err))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [salleNotDelete])     


    useEffect(() => {
        axios
        .get(`${import.meta.env.VITE_REACT_APP_API_URL}Salles`)
        .then((res) => setAllSalle(res.data))
        .catch((err) => console.log('Pas de GetAll' + err))
    }, [])

    const handelClickNav = () => {
        let path = `/form-event/id?${allSalle.length}`
        navigate(path);        
    }


    return ( 
    <>
        <div className={style.div}>
            <div className={style.divCard}>
                <button className={style.btnAdd}  onClick={handelClickNav}>
                    <FontAwesomeIcon icon={faPlus} className={style.icon}/>
                 </button>
            </div>
            {
                salleNotDelete.map((salle) => {
                    return <Card {...salle}  key={salle.id}/>
                })
            }
            
        </div>
    </> );
}
 
export default AllCard;