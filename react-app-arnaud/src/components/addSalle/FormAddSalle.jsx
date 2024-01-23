// import { useRef } from "react";
import style from "./FormAddSalle.module.css";
// import Adresse from '../../Models/Adresse';
// import Contact from '../../Models/Contact';
// import Localisation from '../../Models/Localisation';
// import Salle from '../../Models/Salle';


const FormAddSalle = () => {

    // const nomSalle = useRef(null);

    // const adresseNum = useRef(null);
    // const adresseVoie = useRef(null);
    // const adresseCodePostal = useRef(null);
    // const adresseVille = useRef(null);

    // const localisationX = useRef(null)
    // const localisationY = useRef(null)

    // const contactTel = useRef(null)

    // const capacite = useRef(null)

    // const smac = useRef(null)

    // const styles = useRef([])
    

    const handelClick = (e) => {
        e.preventDefault();
    }

    return ( 
    <>
        <section className={style.section}>
            <form className={style.form}>
                <p className={style.require}>* Champs obligatoires</p>
                <div className={style.divColumn}>
                    <label className={style.partie} htmlFor="name">Nom salle*</label>
                    <input className={style.inputName} type="text" name="name" id="name" />
                </div>
                <div className={style.div}>
                    <p className={style.partie}>Adresse*</p>
                    <div className={style.divColumn}>
                        <label className={style.labelNumAdresse} htmlFor="num">Numéro :</label>
                        <input  type="text" name="" id="num" />
                    </div>
                    <div className={style.divColumn}>
                        <label htmlFor="voie">Voie :</label>
                        <input type="text" name="voie" id="voie" />
                    </div>
                    <div className={style.divColumn}>
                        <label htmlFor="postal">Code postal :</label>
                        <input className={style.inputCodePostal} type="number" name="postal" id="postal" />
                    </div>                    
                    <div className={style.divColumn}>
                        <label htmlFor="ville">Ville :</label>
                        <input type="text" name="ville" id="ville" />
                    </div>
                </div>
                <div>
                    <p className={style.partie}>Localisation</p>
                    <div>
                        <div className={style.divSep}>
                            <label  htmlFor="coordonnées-x">Coordonnée x:</label>
                            <input className={style.inputCoord} type="text" name="coordonnées-x" id="coordonnées-x" />
                        </div>
                        <div className={style.divSep}>
                            <label htmlFor="coordonnées-y">Coordonnée y:</label>
                            <input className={style.inputCoord} type="text" name="coordonnées-y" id="coordonnées-y" />
                        </div>
                    </div>
                </div>
                <div className={style.div}>
                    <p className={style.partie}>Contact*</p>
                    <div  className={style.divSep}>
                        <label htmlFor="tel">Téléphone :</label>
                        <input className={style.inputCoord} type="tel" name="tel" id="tel" />
                    </div>
                </div>
                <div className={style.div}>
                    <label  className={style.partie} htmlFor="capacite">Capacités*</label>
                    <input className={style.inputTel} type="number" name="capacite" id="capacite" />
                </div>
                <div className={style.div}>
                    <p className={style.partie}>SMAC*</p>
                    <div className={style.divRowCenter}>
                        <div className={style.divSepSmac}>
                            <label className={style.labelSmac} htmlFor="smac">Oui</label>
                            <input type="radio" name="sm" id="smac" />
                        </div>
                        <div className={style.divSepSmac}>
                            <label className={style.labelSmac} htmlFor="smac-non">Non</label>
                            <input type="radio" name="sm" id="smac-non" />
                        </div>
                    </div>
                </div>
                <div>
                    <label className={style.partie} htmlFor="style">Styles*</label>
                    <input type="text" name="style" id="style" />
                </div>
                <div className={style.divBtn}>
                    <button onClick={(e) => handelClick(e)} className={style.btn}>Validé</button>
                </div>

            </form>
        </section>
    </> 
    );
}
 
export default FormAddSalle;