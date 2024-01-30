import { useContext, useEffect, useState } from 'react';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import style from './AllCard.module.css';
import Card from './card/Card';
import { SearchContext } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const AllCard = () => {
    //Récup du context
    let { nom, ville, styles } = useContext(SearchContext);
    let { role } = useContext(UserContext);

    let navigate = useNavigate();
    const [salleNotDelete, setsalleNotDelete] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_REACT_APP_API_URL}Salles/GetAllResearched?nomRecherche=${nom}&villeRecherchee=${ville}&styleRecherche=${styles}`)
            .then((res) => setsalleNotDelete(res.data))
            .catch((err) => console.log('Pas de GetAll' + err))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nom, ville, styles])     

    const handelClickNav = () => {
        let path = `/add-salle`
        navigate(path);        
    }
    
    return ( 
    <>
        <div className={style.div}>
            {
                (role != "false" || role == null) ? (
                    <div className={style.divCard}>
                        <button className={style.btnAdd}  onClick={handelClickNav}>
                            <FontAwesomeIcon icon={faPlus} className={style.icon}/>
                        </button>
                    </div>) : <></>
                
            }

            {
                salleNotDelete.map((salle) => {
                    return <Card {...salle}  key={salle.id}/>
                })
            }
            
        </div>
    </> );
}
 
export default AllCard;