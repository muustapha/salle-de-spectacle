import { useEffect, useRef, useState } from "react";
import style from "./FormEvent.module.css"


const FormEvent = () => 
{
    const [enableSubmit, setEnableSubmit] = useState(false);
    const nomRef = useRef(null);
    const artisteRef = useRef(null);
    const prixRef = useRef(null);
    const styleRef = useRef(null);
    const dateRef = useRef(null);
    const arrayRef = [nomRef, artisteRef, prixRef, styleRef, dateRef];

    function checkInputs()
    {
        console.log(nomRef.current.value.length)
        console.log(artisteRef.current.value.length)
        console.log(prixRef.current.value.length)
        console.log(styleRef.current.value.length)
        console.log(dateRef.current.value.length)

        let enable = true;

        arrayRef.forEach(element => {
            if(element.current.value.length == 0)
                enable = false
        });

        setEnableSubmit(enable);
    }

    function onSubmit()
    {

    }

    return (
    <>
        <div className={style.formList}>
            <div>
                <label htmlFor="nom" className={style.label}>Nom salle :</label>
                <br/><input type="text" id="nomSalle" onChange={checkInputs} ref={nomRef}/>
            </div>
            <div>
                <label htmlFor="artiste" className={style.label}>Artiste :</label>
                <br/><input type="text" id="artiste" onChange={checkInputs} ref={artisteRef}/>
            </div>
            <div>
                <label htmlFor="prix" className={style.label}>Prix (€) :</label>
                <br/><input type="number" id="prix" onChange={checkInputs} ref={prixRef}/>
            </div>
            <div>
                <label htmlFor="style" className={style.label}>Style :</label>
                <br/><select type="text" id="style" onChange={checkInputs} ref={styleRef}>
                    <option value="">Choisir le style de musique</option>
                    <option value="Jazz">Jazz</option>
                </select>
            </div>
            <div>
                <label htmlFor="date" className={style.label}>Date :</label>
                <br/><input type="date" id="date" onChange={checkInputs} ref={dateRef}/>
            </div>
            <div>
                <button id="btnAjouter" disabled={!enableSubmit} onClick={onSubmit}>Ajouter</button>
            </div>
        </div>
    </>
    );
}
 
export default FormEvent;