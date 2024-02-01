import PropTypes from 'prop-types';
import Avis from './avis/Avis';
import style from './ListeAvis.module.css'
import { useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext'
import { NewAvis } from "../../../Models/NewAvis";
import axios from 'axios';

// eslint-disable-next-line react/prop-types
const ListesAvis = ({salle, id}) => {

    let { token } = useContext(UserContext);

    const config = {
        headers: {
          Authorization: `Bearer ${token}`},
    }

    const REGEX_AVIS = /^[0-9]|10$/;

    const [addAvis, setAddAvis] = useState(false); 
    const [note, setNote] = useState();

    const handelSubmit = async () => {
        if (REGEX_AVIS.test(note) && note != "") {
            let date = new Date().toISOString();
            const avis = new NewAvis(date, Number(note));

            // eslint-disable-next-line react/prop-types
            salle.listeAvis.push(avis);
            await axios
                .put(`${import.meta.env.VITE_REACT_APP_API_URL}Salles/${id}`, salle, config)
                .then((res) => console.log(res))
                .catch((err) => console.log(err + "pas de put"));
            
                setAddAvis(false);
        }
        else {
            alert('Votre note doit être entre 0 - 10 ')
        }
    }

    return ( 
    <>
        <div className={style.div}>
            {
                // eslint-disable-next-line react/prop-types
                !salle.listeAvis ? 
                (
                    <p>Aucun avis disponible</p>
                ) : 
                (
                    // eslint-disable-next-line react/prop-types
                    salle.listeAvis.map((avis, index) => {
                        return  <Avis key={index} {...avis}/>
                    })
                )
            }
        </div>

            {
                (token) ? (
                    (!addAvis) ? 
                    (
                        <div className={style.divBtn}>
                            <button className={style.btn} onClick={() => setAddAvis(true)}>Ajouter Avis</button>
                        </div>) :   
                        (<div className={style.divBtn}>   
                        <div className={style.divForm}>
                            <label className={style.label} htmlFor="note">Note : </label>
                            <input className={style.input} type="number" id='note' onChange={(e) => setNote(e.target.value)}/>
                        </div>
                        <div className={style.containerBtn}>
                            <button className={style.btn} onClick={handelSubmit}>Ajouter</button>
                            <button className={style.btn} onClick={() => setAddAvis(false)} >X</button>
                        </div>
                        </div>)
                ) : <></>               
                
            }

    </> );
}
ListesAvis.propTypes = {
    listeAvis: PropTypes.array 
};
 
export default ListesAvis;