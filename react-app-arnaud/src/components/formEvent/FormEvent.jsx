import { useEffect, useRef, useState, useContext } from "react";
import style from "./FormEvent.module.css"
import axios from "axios";
import { useParams } from "react-router-dom";
import { UserContext } from '../context/UserContext';

const FormEvent = () => 
{
    const [salle, setSalle] = useState({});

    const [artiste, setArtiste] = useState("");
    const [prix, setPrix] = useState();
    const [styleEvent, setStyleEvent] = useState();
    const [dateEvent, setDateEvent] = useState();
    
    const [inUpdatingMode, setInUpdatingMode] = useState(false);
    const [enableSubmit, setEnableSubmit] = useState(false);

    let {idSalle, idEvent} = useParams();
    console.log(idSalle, idEvent)

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}Salles/id?id=${idSalle}`);
            if (response.data) {
              setSalle(response.data);
            } else {
              throw new Error('No data received');
            }
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
    }, []);

    useEffect(() => {

        if(idEvent != 0)
        {
            const fetchData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API_URL}Event/${idEvent}`);
                if (response.data) {
                    if(response.data.idSalle == idSalle)
                    {
                        setInUpdatingMode(true)
                        setStyleEvent(response.data.style)
                        fillInputs(response.data)
                        setEnableSubmit(true)
                    }
                } else {
                throw new Error('No data received');
                }
            } catch (error) {
                console.error(error);
            }
            };
        
            fetchData();
        }
    }, [salle]);

    const [prixWarn, setprixWarn] = useState(false);
    const artisteRef = useRef(null);
    const prixRef = useRef(null);
    const styleRef = useRef(null);
    const dateRef = useRef(null);
    const arrayRef = [artisteRef, prixRef, styleRef, dateRef];
    
    const [allStyle, setAllStyle] = useState([]);

    console.log(salle)

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

            if(inUpdatingMode)
                updateEvent()
            else
                createEvent()
        }
    }
    const { token } = useContext(UserContext)

    function createEvent()
    {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`},
        }

        axios.post((import.meta.env.VITE_REACT_APP_API_URL + 'Event'),
        {
            idSalle,
            artiste: artisteRef.current.value,
            prix: prixRef.current.value,
            style: styleRef.current.value,
            date: dateRef.current.value
        }, config).then((response) => {
        });
    }

    function fillInputs(event)
    {
        setArtiste(event.artiste)
        setPrix(event.prix)
        setStyleEvent(event.style)
        let formatedDate = event.date.substring(0,10);
        setDateEvent(formatedDate)
    }

    function updateEvent()
    {
        const config = {
            headers: {
              Authorization: `Bearer ${token}`},
        }

        axios.put((import.meta.env.VITE_REACT_APP_API_URL + 'Event'),
        {
            Id: idEvent,
            idSalle,
            artiste: artisteRef.current.value,
            prix: prixRef.current.value,
            style: styleRef.current.value,
            date: dateRef.current.value
        }, config).then((response) => {
        });
    }

    return (
    <>
        <div className={style.formList}>
            <div className={style.formDiv}>
                <label htmlFor="nom" className={style.label}>Nom salle :</label>
                <br/><input type="text" id="nomSalle" defaultValue={salle.nom} readOnly className={style.readOnly}/>
            </div>
            <div className={style.formDiv}>
                <label htmlFor="artiste" className={style.label}>Artiste :</label>
                <br/><input type="text" id="artiste" defaultValue={artiste} onChange={checkInputs} ref={artisteRef} className={style.input}/>
            </div>
            <div className={style.formDiv}>
                <label htmlFor="Date" className={style.label}>Prix (€) :</label>
                <br/><input type="number" id="prix" defaultValue={prix} onChange={checkInputs} ref={prixRef} className={style.input}/>
                <br/><label className={style.warning} hidden={!prixWarn}>Veuillez entrer un prix correct</label>
            </div>
            <div className={style.formDiv}>
                <label htmlFor="style" className={style.label}>Style :</label>
                <br/><select type="text" id="style" onChange={checkInputs} ref={styleRef} className={style.select}>
                    <option value="">Choisir le style de musique</option>
                    {
                        (salle.styles != undefined) ? 
                        salle.styles.map((s, index) => {
                            console.log(s)
                            console.log(styleEvent)
                           return <option key={index} selected={s == styleEvent}>{s}</option>
                        }) : <></>                
                    }
                </select>
            </div>
            <div className={style.formDiv}>
                <label htmlFor="date" className={style.label}>Date :</label>
                <br/><input type="date" id="date" defaultValue={dateEvent} onChange={checkInputs} ref={dateRef} className={style.input}/>
            </div>
            <div>
                <button id="btnAjouter" disabled={!enableSubmit} onClick={onSubmit} className={style.buttonAjouter}>{inUpdatingMode ? "Modifier" : "Créer"}</button>
            </div>
        </div>
    </>
    );
}
 
export default FormEvent;