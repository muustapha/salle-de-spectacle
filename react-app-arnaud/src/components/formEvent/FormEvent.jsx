import { useEffect, useRef, useState } from "react";
import style from "./FormEvent.module.css"
import axios from "axios";

const FormEvent = () => 
{
    let nomSalle = localStorage.getItem("nomSalle")
    const [enableSubmit, setEnableSubmit] = useState(false);
    const [prixWarn, setprixWarn] = useState(false);
    const artisteRef = useRef(null);
    const prixRef = useRef(null);
    const styleRef = useRef(null);
    const dateRef = useRef(null);
    const arrayRef = [artisteRef, prixRef, styleRef, dateRef];
    
    const [allStyle, setAllStyle] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_REACT_APP_API_URL}Style`)
            .then((res) =>  setAllStyle(res.data[0].types))
            .catch((err) => console.log(err))
    }, [])

    function checkInputs()
    {
        let enable = true;

        arrayRef.forEach(element => {
            if(element.current.value.length == 0)
                enable = false
        });

        setEnableSubmit(enable);
    }

    function onSubmit()
    {
        const regex = new RegExp('^(\\d{1,})($|\\.\\d{2}$)', 'gm')
        const output = prixRef.current.value.match(regex)

        if(output == null)
        {
            setprixWarn(true)
        }
        else
        {
            setprixWarn(false)
            createEvent()
        }
    }

    function createEvent()
    {
        axios.post("https://localhost:44371/api/Event",
        {
            idSalle: localStorage.getItem("idSalle"),
            artiste: artisteRef.current.value,
            prix: prixRef.current.value,
            style: styleRef.current.value,
            date: dateRef.current.value
        }).then((response) => {
         console.log(response);
        });
    }

    return (
    <>
        <div className={style.formList}>
            <div className={style.formDiv}>
                <label htmlFor="nom" className={style.label}>Nom salle :</label>
                <br/><input type="text" id="nomSalle" onChange={checkInputs} readOnly="true" value={nomSalle} className={style.readOnly}/>
            </div>
            <div className={style.formDiv}>
                <label htmlFor="artiste" className={style.label}>Artiste :</label>
                <br/><input type="text" id="artiste" onChange={checkInputs} ref={artisteRef} className={style.input}/>
            </div>
            <div className={style.formDiv}>
                <label htmlFor="prix" className={style.label}>Prix (€) :</label>
                <br/><input type="number" id="prix" onChange={checkInputs} ref={prixRef} className={style.input}/>
                <br/><label className={style.warning} hidden={!prixWarn}>Veuillez entrer un prix correct</label>
            </div>
            <div className={style.formDiv}>
                <label htmlFor="style" className={style.label}>Style :</label>
                <br/><select type="text" id="style" onChange={checkInputs} ref={styleRef} className={style.select}>
                    <option value="">Choisir le style de musique</option>
                    {
                        allStyle.map((s, index) => {
                           return <option key={index}>{s}</option>
                        })
                    }
                </select>
            </div>
            <div className={style.formDiv}>
                <label htmlFor="date" className={style.label}>Date :</label>
                <br/><input type="date" id="date" onChange={checkInputs} ref={dateRef} className={style.input}/>
            </div>
            <div>
                <button id="btnAjouter" disabled={!enableSubmit} onClick={onSubmit} className={style.buttonAjouter}>Ajouter</button>
            </div>
        </div>
    </>
    );
}
 
export default FormEvent;