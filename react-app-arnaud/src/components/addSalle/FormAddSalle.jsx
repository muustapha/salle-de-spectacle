import { useRef, useState } from "react";
import style from "./FormAddSalle.module.css";
// import Adresse from '../../Models/Adresse';
// import Contact from '../../Models/Contact';
// import Localisation from '../../Models/Localisation';
// import Salle from '../../Models/Salle';


const FormAddSalle = () => {

    const [nomSalle, setNomSalle] = useState("");
    const [adresseNum, setAdresseNum] = useState("");
    const [adresseVoie, setAdresseVoie] = useState("");
    const [adresseCodePostal, setAdresseCodePostal] = useState("");
    const [adresseVille, setAdresseVille] = useState("");
    const [localisationX, setLocalisationX] = useState(null);
    const [localisationY, setLocalisationY] = useState(null);
    const [contactTel, setContactTel] = useState("");
    const [capacite, setCapacite] = useState("");
    const [smac, setSmac] = useState(false);
    const [styles, setStyles] = useState("");
  
    const [errors, setErrors] = useState({
      nomSalle: false,
      adresseNum: false,
      adresseVoie: false,
      adresseCodePostal: false,
      adresseVille: false,
      localisationX: false,
      localisationY: false,
      contactTel: false,
      capacite: false,
      smac: false,
      styles: false,
    });
  
    const REGEX_CHECK_LETTRE_SPACE = /^[a-zA-Z\s]*$/;
    const REGEX_CHECK_PHONE = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
    const REGEX_CHECK_DOUBLE = /(\d+(?:\.\d+)?)/;
    const REGEX_CHECK_INT = /^[0-9]*$/;
    const REGEX_CHECK_CODE_POSTAL = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
    const REGEX_CHECK_STYLES = /^([a-zA-Z0-9]+\/)+[a-zA-Z0-9]+$/;
  
    const validateInput = (value, regex) => {
      return regex.test(value) && value !== "";
    };
  
    const handleInputChange = (setter, value, regex, fieldName) => {
      setter(value);
      setErrors((prevErrors) => ({...prevErrors, [fieldName]: !validateInput(value, regex), }));
    };

    const checkSmac = () => {
        const radioOui = document.getElementById('smac');
        const radioNon = document.getElementById('smac-non');
      
        if (radioOui.checked || radioNon.checked) {
          return true;
        } else {
          return false;
        }
      };
  
    const handelClick = (e) => {
      e.preventDefault();
  
      setErrors({
        nomSalle: !validateInput(nomSalle, REGEX_CHECK_LETTRE_SPACE),
        adresseNum: !validateInput(adresseNum, REGEX_CHECK_INT),
        adresseVoie: !validateInput(adresseVoie, REGEX_CHECK_LETTRE_SPACE),
        adresseCodePostal: !validateInput(
          adresseCodePostal,
          REGEX_CHECK_CODE_POSTAL
        ),
        adresseVille: !validateInput(adresseVille, REGEX_CHECK_LETTRE_SPACE),
        localisationX: localisationX !== null && !validateInput(localisationX, REGEX_CHECK_DOUBLE),
        localisationY: localisationY !== null && !validateInput(localisationY, REGEX_CHECK_DOUBLE),
        contactTel: !validateInput(contactTel, REGEX_CHECK_PHONE),
        capacite: !validateInput(capacite, REGEX_CHECK_INT),
        smac: !checkSmac(), 
        styles: !validateInput(styles, REGEX_CHECK_STYLES),
      });

      if (errors) {
        console.log('bon');
      } else {
        console.log("aie");
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
                        onChange={(e) => handleInputChange(setNomSalle, e.target.value, REGEX_CHECK_LETTRE_SPACE,"nomSalle")
                    }/>
                    {
                        errors.nomSalle && (<p className={style.badText}>Veuillez entrer un nom valide.</p>)
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
                            onChange={(e) => handleInputChange(setAdresseNum, e.target.value, REGEX_CHECK_INT, "adresseNum")}
                        />
                        {
                            errors.adresseNum && (<p className={style.badText}>Veuillez entrer un numéro valide.</p>)
                        }
                    </div>
                    <div className={style.divColumn}>
                        <label className={style.label} htmlFor="voie">Voie :</label>
                        <input 
                        className={style.input} 
                        type="text" 
                        name="voie" 
                        id="voie" 
                        onChange={(e) => handleInputChange(setAdresseVoie, e.target.value, REGEX_CHECK_LETTRE_SPACE, "adresseVoie")} 
                        />
                        {
                            errors.adresseVoie && (<p className={style.badText}>Veuillez entrer une voie valide.</p>)
                        }
                    </div>
                    <div className={style.divColumn}>
                        <label className={style.label} htmlFor="postal">Code postal :</label>
                        <input 
                            className={`${style.inputCodePostal} ${style.input}`} 
                            type="number" 
                            name="postal" 
                            id="postal"  
                            onChange={(e) => handleInputChange(setAdresseCodePostal, e.target.value, REGEX_CHECK_CODE_POSTAL, "adresseCodePostal")}
                        />
                        {
                            errors.adresseCodePostal && (<p className={style.badText}>Veuillez entrer un code postal valide.</p>)
                        }
                    </div>                    
                    <div className={style.divColumn}>
                        <label className={style.label} htmlFor="ville">Ville :</label>
                        <input 
                            className={style.input} 
                            type="text" 
                            name="ville" 
                            id="ville" 
                            onChange={(e) => handleInputChange(setAdresseVille, e.target.value, REGEX_CHECK_LETTRE_SPACE, "adresseVille")}
                        />
                        {
                            errors.adresseVille && (<p className={style.badText}>Veuillez entrer une ville valide.</p>)
                        }
                    </div>
                </div>
                <div>
                    <p className={style.partie}>Localisation</p>
                    <div>
                        <div className={style.divSep}>
                            <label className={style.label}  htmlFor="coordonnées-x">Coordonnée x:</label>
                            <input 
                                className={`${style.input}`}
                                 type="text" 
                                 name="coordonnees-x" 
                                 id="coordonnees-x" 
                                 onChange={(e) => handleInputChange(setLocalisationX, e.target.value, REGEX_CHECK_DOUBLE, "localisationX")}
                            />
                        {
                            errors.localisationX && (<p className={style.badText}>Veuillez entrer une coordonnée X valide.</p>)
                        }
                        </div>
                        <div className={style.divSep}>
                            <label className={style.label} htmlFor="coordonnées-y">Coordonnée y:</label>
                            <input 
                                className={`${style.input}`} 
                                type="text" 
                                name="coordonnees-y" 
                                id="coordonnees-y" 
                                onChange={(e) => handleInputChange(setLocalisationY, e.target.value, REGEX_CHECK_DOUBLE, "localisationY")}
                            />
                        {
                            errors.localisationX && (<p className={style.badText}>Veuillez entrer une coordonnée Y valide.</p>)
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
                            onChange={(e) => handleInputChange(setContactTel, e.target.value, REGEX_CHECK_PHONE, "contactTel")}
                        />
                        {
                            errors.contactTel && (<p className={style.badText}>Veuillez entrer un téléphone valide.</p>)
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
                        onChange={(e) => handleInputChange(setCapacite, e.target.value, REGEX_CHECK_INT, "capacite")}
                    />
                    {
                        errors.capacite && (<p className={style.badText}>Veuillez entrer une capacitée valide.</p>)
                    }
                </div>
                <div className={style.div}>
                    <p className={style.partie}>SMAC*</p>
                    <div className={style.divRowCenter}>
                        <div className={style.divSepSmac}>
                            <label data-smac="" className={`${style.labelSmac} ${style.label}`} htmlFor="smac">Oui</label>
                            <input className={style.input} type="radio" name="sm" id="smac" onChange={(e) => setSmac(true)}/>
                        </div>
                        <div className={style.divSepSmac}>
                            <label data-smac="" className={`${style.labelSmac} ${style.label}`} htmlFor="smac-non">Non</label>
                            <input className={style.input} type="radio" name="sm" id="smac-non" onChange={(e) => setSmac(true)}/>
                        </div>
                    </div>
                    {
                        errors.smac && (<p className={style.badText}>Veuillez entrer une capacitée valide.</p>)
                    }
                </div>
                <div>
                    <label className={style.partie} htmlFor="style">Styles* (../../..)</label>
                    <input 
                        className={style.input} 
                        type="text" 
                        name="style" 
                        id="style" 
                        onChange={(e) => handleInputChange(setStyles, e.target.value, REGEX_CHECK_STYLES, "styles")}
                    />
                    {
                        errors.styles && (<p className={style.badText}>Veuillez respecter l'écriture valide.</p>)
                    }
                </div>
                <div className={style.divBtn}>
                    <button onClick={handelClick} className={style.btn}>Validé</button>
                </div>

            </form>
        </section>
    </> 
    );
}
 
export default FormAddSalle;