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

    // const nomSalleRef = useRef("");
    // const adresseNumRef = useRef("");
    // const adresseVoieRef = useRef("");
    // const adresseCodePostalRef = useRef("");
    // const adresseVilleRef = useRef("");
    // const localisationXRef = useRef("");
    // const localisationYRef = useRef("");
    // const contactTelRef = useRef("")
    // const capaciteRef = useRef("")
    // const smacRef = useRef("")
    // const stylesRef= useRef([])

    const REGEX_CHECK_LETTRE_SPACE = /^[a-zA-Z\s]*$/; 
    const REGEX_CHECK_PHONE = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;
    const REGEX_CHECK_DOUBLE = /(\d+(?:\.\d+)?)/;
    const REGEX_CHECK_INT = /^[0-9]*$/;
    const REGEX_CHECK_CODE_POSTAL = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/;
    const REGEX_CHECK_STYLES = /^([a-zA-Z0-9]+\/)+[a-zA-Z0-9]+$/;


    const checkInputNomSalle = (nom) => {
        if (REGEX_CHECK_LETTRE_SPACE.test(nom)) {
            return true;
        } else {
            console.log(document.getElementById('name'));
            document.getElementById('name').classList.add('${style.badInput}');
            return false;
        }
    }

    const checkAdresseNum = (num) => {
        if (REGEX_CHECK_INT.test(num)) {
            console.log('bonNum');
        } else {
            console.log('aieNum')
        }
    }

    const checkAdresseVoie = (voie) => {
        if (REGEX_CHECK_LETTRE_SPACE.test(voie)) {
            console.log('bonVoie');
        } else {
            console.log('aieVoie')
        }
    }

    const checkAdresseCodePostal = (code) => {
        if (REGEX_CHECK_CODE_POSTAL.test(code)) {
            console.log('bonCode');
        } else {
            console.log('aieCode')
        }
    }

    const checkAdresseVille = (ville) => {
        if (REGEX_CHECK_LETTRE_SPACE.test(ville)) {
            console.log('bonVille');
        } else {
            console.log('aieVille')
        }
    }

    const checkCoordX = (x, y) => {
        if ((REGEX_CHECK_DOUBLE.test(x) || x == null) && (REGEX_CHECK_DOUBLE.test(y) || y == null)) {
            console.log('bonXetY');
        } else {
            console.log('aieXetY')
        }
    }

    const checkContact = (tel) => {
        if (REGEX_CHECK_PHONE.test(tel)) {
            console.log('bonTel');
        } else {
            console.log('aieTel')
        }
    }

    const checkCapacite = (cap) => {
        if (REGEX_CHECK_INT.test(cap)) {
            console.log('bonCap');
        } else {
            console.log('aieCap')
        }
    }

    const checkSmac = (s) => {
        if (s) {
            console.log('bonS');
        } else {
            console.log('aieS')
        }
    }
    
    const checkStyles = (styles) => {
        if (REGEX_CHECK_STYLES.test(styles)) {
            console.log('BonStyle');
        } else {
            console.log('aieStyle');
        }
    }


    const handelClick = (e) => {
        e.preventDefault();

        checkInputNomSalle(nomSalle);
        checkAdresseNum(adresseNum);
        checkAdresseVoie(adresseVoie);
        checkAdresseCodePostal(adresseCodePostal);
        checkAdresseVille(adresseVille);
        checkCoordX(localisationX, localisationY);
        checkContact(contactTel);
        checkCapacite(capacite);
        checkSmac(smac);
        checkStyles(styles);


    }

    return ( 
    <>
        <section className={style.section}>
            <form className={style.form}>
                <p className={style.require}>* Champs obligatoires</p>
                <div className={style.divColumn}>
                    <label className={`${style.partie} ${style.label}`} htmlFor="name">Nom salle*</label>
                    <input className={`${style.inputName} ${style.input}` } type="text" name="name" id="name"  onChange={(e) => setNomSalle(e.target.value)}/>
                </div>
                <div className={style.div}>
                    <p className={style.partie}>Adresse*</p>
                    <div className={style.divColumn}>
                        <label className={`${style.labelNumAdresse} ${style.label}`} htmlFor="num">Numéro :</label>
                        <input className={style.input} type="text" name="" id="num" onChange={(e) => setAdresseNum(e.target.value)}/>
                    </div>
                    <div className={style.divColumn}>
                        <label className={style.label} htmlFor="voie">Voie :</label>
                        <input className={style.input} type="text" name="voie" id="voie" onChange={(e) => setAdresseVoie(e.target.value)} />
                    </div>
                    <div className={style.divColumn}>
                        <label className={style.label} htmlFor="postal">Code postal :</label>
                        <input className={`${style.inputCodePostal} ${style.input}`} type="number" name="postal" id="postal"  onChange={(e) => setAdresseCodePostal(e.target.value)}/>
                    </div>                    
                    <div className={style.divColumn}>
                        <label className={style.label} htmlFor="ville">Ville :</label>
                        <input className={style.input} type="text" name="ville" id="ville" onChange={(e) => setAdresseVille(e.target.value)}/>
                    </div>
                </div>
                <div>
                    <p className={style.partie}>Localisation</p>
                    <div>
                        <div className={style.divSep}>
                            <label className={style.label}  htmlFor="coordonnées-x">Coordonnée x:</label>
                            <input className={`${style.inputCoord} ${style.input}`} type="text" name="coordonnées-x" id="coordonnées-x" onChange={(e) => setLocalisationX(e.target.value)}/>
                        </div>
                        <div className={style.divSep}>
                            <label className={style.label} htmlFor="coordonnées-y">Coordonnée y:</label>
                            <input className={`${style.inputCoord} ${style.input}`} type="text" name="coordonnées-y" id="coordonnées-y" onChange={(e) => setLocalisationY(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <div className={style.div}>
                    <p className={style.partie}>Contact*</p>
                    <div  className={style.divSep}>
                        <label className={style.label} htmlFor="tel">Téléphone :</label>
                        <input className={`${style.inputCoord} ${style.input}`} type="tel" name="tel" id="tel" onChange={(e) => setContactTel(e.target.value)}/>
                    </div>
                </div>
                <div className={style.div}>
                    <label  className={style.partie} htmlFor="capacite">Capacités*</label>
                    <input className={`${style.inputTel} ${style.input}`} type="number" name="capacite" id="capacite" onChange={(e) => setCapacite(e.target.value)}/>
                </div>
                <div className={style.div}>
                    <p className={style.partie}>SMAC*</p>
                    <div className={style.divRowCenter}>
                        <div className={style.divSepSmac}>
                            <label className={`${style.labelSmac} ${style.label}`} htmlFor="smac">Oui</label>
                            <input className={style.input} type="radio" name="sm" id="smac" onChange={(e) => setSmac(true)}/>
                        </div>
                        <div className={style.divSepSmac}>
                            <label className={`${style.labelSmac} ${style.label}`} htmlFor="smac-non">Non</label>
                            <input className={style.input} type="radio" name="sm" id="smac-non" onChange={(e) => setSmac(true)}/>
                        </div>
                    </div>
                </div>
                <div>
                    <label className={style.partie} htmlFor="style">Styles* (../../..)</label>
                    <input className={style.input} type="text" name="style" id="style" onChange={(e) => setStyles(e.target.value)}/>
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