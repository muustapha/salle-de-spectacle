import { useContext, useEffect, useState } from "react";
import style from "./FormAddSalle.module.css";
import { Adresse } from '../../Models/Adresse';
import { Contact } from '../../Models/Contact';
import { Localisation } from '../../Models/Localisation';
import { SalleIn } from '../../Models/Salle';
import axios from "axios";
import { UserContext } from '../context/UserContext';

const FormAddSalle = () => {

    const { token } = useContext(UserContext)

    const [nomSalle, setNomSalle] = useState("");
    const [adresseNum, setAdresseNum] = useState("");
    const [adresseVoie, setAdresseVoie] = useState("");
    const [adresseCodePostal, setAdresseCodePostal] = useState("");
    const [adresseVille, setAdresseVille] = useState("");
    const [localisationX, setLocalisationX] = useState(null);
    const [localisationY, setLocalisationY] = useState(null);
    const [contactTel, setContactTel] = useState("");
    const [capacite, setCapacite] = useState("");
    const [smac, setSmac] = useState("");
    const [arrayStyle, setArrayStyle] = useState([])
    const [getStyles, setGetStyles] = useState([])
    const [isClickSubmit, setIsClickSubmit] = useState(false);
    const [isClickSmac, setIsClickSmac] = useState(false);

    const [allSalle, setAllSalle] = useState([]);

    const REGEX_CHECK_LETTRE_SPACE = /^[a-zA-Z\s].{3,20}$/;
    const REGEX_CHECK_PHONE = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
    const REGEX_CHECK_DOUBLE = /(\d+(?:\.\d+)?)/;
    const REGEX_CHECK_INT = /^[0-9]*$/;
    const REGEX_CHECK_CODE_POSTAL = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
  
    const [errors, setErrors] = useState({
      nomSalle: true,
      adresseNum: true,
      adresseVoie: true,
      adresseCodePostal: true,
      adresseVille: true,
      localisationX: true,
      localisationY: true,
      contactTel: true,
      capacite: true,
      smac: true,
      styles: true,
    });

    const config = {
        headers: {
          Authorization: `Bearer ${token}`},
    }

    useEffect(() => {
        if (token) {
            axios
             .get(`${import.meta.env.VITE_REACT_APP_API_URL}Salles`, config)
             .then((res) => setAllSalle(res.data))
             .catch((err) => console.log('Pas de GetAll' + err))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [token])

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_REACT_APP_API_URL}Style`)
            .then((res) => setGetStyles(res.data[0].types))
            .catch((err) => console.log(err + "Pas de styles"))
    }, [])

    const checkInput = (value, regex) => {
        return regex.test(value) && value != "";
    }

    const checkValidity = (value, regex, node) => {
        if (checkInput(value, regex)) {
            setErrors((elemnt) => ({
                ...elemnt,
                [node]: false
            }));
        } else {
            setErrors((elemnt) => ({
                ...elemnt,
                [node]: true
            }));
        }
    }

    useEffect(() => {
    if (isClickSmac) {
        setErrors((elemnt) => ({
            ...elemnt,
            smac: false
        }));
    } else {
        setErrors((elemnt) => ({
            ...elemnt,
            smac: true
        }));
    }
    }, [isClickSmac])

    const createArrayStyle = (e) => {
        const style = e.target.dataset.style;

        if (arrayStyle.includes(style)) {
            setArrayStyle(arrayStyle.filter((word) => word !== style));
        } else {
            setArrayStyle([...arrayStyle, style]);
        }

        if (arrayStyle.length > 0) {
            errors.styles = false;
          } else {
            errors.styles = true
          }
    }

    const boolSmac = (s) => {
       return s == "true" ? true : false 
    } 
  
    const handelClick = async(e) => {
      e.preventDefault();       

      console.log(arrayStyle.length);

      
      if (!errors.nomSalle && !errors.adresseNum && !errors.adresseVoie && !errors.adresseCodePostal && !errors.adresseVille && !errors.localisationX && !errors.localisationY && !errors.contactTel && !errors.capacite && !errors.smac && !errors.styles) {

        // Ajout localisation
        const newLocalisation = new Localisation("Point", [localisationX, localisationY]);


        // Ajout Adresse
        const  newAdresse = new Adresse(adresseNum, adresseVoie, adresseCodePostal, adresseVille, newLocalisation)

        // Ajout Contact
        const newContact = new Contact(contactTel)

        //Création de la salle
        const newSalle = new SalleIn((Number(allSalle.length) + 1),nomSalle, newAdresse, arrayStyle, Number(capacite), boolSmac(smac), [newContact])
        if (token) {
            await axios
                    .post(`${import.meta.env.VITE_REACT_APP_API_URL}Salles`, newSalle, config)
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err + "pas de post"))
        }
      } else {
        console.log("non");
      } 
    };
  

    return ( 
    <>
        <section className={style.section}>
            <form className={style.form}>
                <p className={style.require}>* Champs obligatoires</p>
                <div className={style.divColumn}>
                    <label className={`${style.partie} ${style.label}`} htmlFor="name">Nom salle*</label>
                    <input 
                        className={`${style.inputName} ${style.input}`} 
                        type="text" 
                        name="name" 
                        id="name"  
                        onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_LETTRE_SPACE, "nomSalle"); setNomSalle(e.target.value)}
                    }/>
                    {
                        (errors.nomSalle && isClickSubmit) && (<p className={style.badText}>Veuillez entrer un nom valide.</p>)
                    }
                </div>
                <div className={style.div}>
                    <p className={style.partie}>Adresse*</p>
                    <div className={style.divColumn}>
                        <label className={`${style.labelNumAdresse} ${style.label}`} htmlFor="num">Numéro :</label>
                        <input 
                            className={style.input}
                            type="text" 
                            name="" 
                            id="num" 
                            onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_INT, "adresseNum"); setAdresseNum(e.target.value)}}
                        />
                        {
                            (errors.adresseNum  && isClickSubmit) && (<p className={style.badText}>Veuillez entrer un numéro valide.</p>)
                        }
                    </div>
                    <div className={style.divColumn}>
                        <label className={style.label} htmlFor="voie">Voie :</label>
                        <input 
                        className={style.input} 
                        type="text" 
                        name="voie" 
                        id="voie" 
                        onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_LETTRE_SPACE, "adresseVoie"); setAdresseVoie(e.target.value)}} 
                        />
                        {
                            (errors.adresseVoie  && isClickSubmit) && (<p className={style.badText}>Veuillez entrer une voie valide.</p>)
                        }
                    </div>
                    <div className={style.divColumn}>
                        <label className={style.label} htmlFor="postal">Code postal :</label>
                        <input 
                            className={`${style.inputCodePostal} ${style.input}`} 
                            type="number" 
                            name="postal" 
                            id="postal"  
                            onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_CODE_POSTAL, "adresseCodePostal"); setAdresseCodePostal(e.target.value)}}
                        />
                        {
                            (errors.adresseCodePostal && isClickSubmit) && (<p className={style.badText}>Veuillez entrer un code postal valide.</p>)
                        }
                    </div>                    
                    <div className={style.divColumn}>
                        <label className={style.label} htmlFor="ville">Ville :</label>
                        <input 
                            className={style.input} 
                            type="text" 
                            name="ville" 
                            id="ville" 
                            onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_LETTRE_SPACE, "adresseVille"); setAdresseVille(e.target.value)}}
                        />
                        {
                            (errors.adresseVille && isClickSubmit) && (<p className={style.badText}>Veuillez entrer une ville valide.</p>)
                        }
                    </div>
                </div>
                <div>
                    <p className={style.partie}>Localisation*</p>
                    <div>
                        <div className={style.divSep}>
                            <label className={style.label}  htmlFor="coordonnées-x">Coordonnée x:</label>
                            <input 
                                className={`${style.input}`}
                                 type="text" 
                                 name="coordonnees-x" 
                                 id="coordonnees-x" 
                                 onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_DOUBLE, "localisationX"); setLocalisationX(e.target.value)}}
                            />
                        {
                            (errors.localisationX && isClickSubmit) && (<p className={style.badText}>Veuillez entrer une coordonnée X valide.</p>)
                        }
                        </div>
                        <div className={style.divSep}>
                            <label className={style.label} htmlFor="coordonnées-y">Coordonnée y:</label>
                            <input 
                                className={`${style.input}`} 
                                type="text" 
                                name="coordonnees-y" 
                                id="coordonnees-y" 
                                onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_DOUBLE, "localisationY"); setLocalisationY(e.target.value)}}
                            />
                        {
                            (errors.localisationY && isClickSubmit) && (<p className={style.badText}>Veuillez entrer une coordonnée Y valide.</p>)
                        }
                        </div>
                    </div>
                </div>
                <div className={style.div}>
                    <p className={style.partie}>Contact*</p>
                    <div  className={style.divSep}>
                        <label className={style.label} htmlFor="tel">Téléphone :</label>
                        <input 
                            className={`${style.inputCoord} 
                            ${style.input}`} 
                            type="tel" 
                            name="tel" 
                            id="tel" 
                            onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_PHONE, "contactTel"); setContactTel(e.target.value)}}
                        />
                        {
                            (errors.contactTel && isClickSubmit) && (<p className={style.badText}>Veuillez entrer un téléphone valide.</p>)
                        }
                    </div>
                </div>
                <div className={style.div}>
                    <label  className={style.partie} htmlFor="capacite">Capacités*</label>
                    <input 
                        className={`${style.inputTel} ${style.input}`}
                        type="number" 
                        name="capacite" 
                        id="capacite" 
                        onChange={(e) => {checkValidity(e.target.value, REGEX_CHECK_INT, "capacite"); setCapacite(e.target.value)}}
                    />
                    {
                        (errors.capacite && isClickSubmit) && (<p className={style.badText}>Veuillez entrer une capacitée valide.</p>)
                    }
                </div>
                <div className={style.div}>
                    <p className={style.partie}>SMAC*</p>
                    <div className={style.divRowCenter}>
                        <div className={style.divSepSmac}>
                            <label data-smac="" className={`${style.labelSmac} ${style.label}`} htmlFor="smac">Oui</label>
                            <input className={style.input} type="radio" name="sm" id="smac" data-radio="true" onChange={(e) => {setSmac(e.target.dataset.radio); setIsClickSmac(true)}}/>
                        </div>
                        <div className={style.divSepSmac}>
                            <label data-smac="" className={`${style.labelSmac} ${style.label}`} htmlFor="smac-non">Non</label>
                            <input className={style.input} type="radio" name="sm" id="smac-non" data-radio="false" onChange={(e) => {setSmac(e.target.dataset.radio); setIsClickSmac(true)}}/>
                        </div>
                    </div>
                    {
                        (errors.smac && isClickSubmit) && (<p className={style.badText}>Veuillez entrer une capacitée valide.</p>)
                    }
                </div>
                <div>
                    <label className={style.partie} htmlFor="style">Styles*</label>
                    <div className={style.divStyles}>
                        {
                            getStyles.map((s, index) => {
                                return (
                                    <div className={style.divMap} key={index}>
                                        <input type="checkbox" data-style={s} onInput={(e) => {createArrayStyle(e);}} id={s}/>
                                        <label className={style.labelStyle} htmlFor={s}>{s}</label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    {
                        ((arrayStyle.length == 0) && isClickSubmit) && (<p className={style.badText}>Veuillez respecter lécriture valide.</p>)
                    }
                </div>
                <div className={style.divBtn}>
                    <button onClick={(e) => {handelClick(e); setIsClickSubmit(true)}} className={style.btn}>Validé</button>
                </div>

            </form>
        </section>
    </> 
    );
}
 
export default FormAddSalle;