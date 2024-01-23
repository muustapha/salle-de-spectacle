import style from "./FormAddSalle.module.css";

const FormAddSalle = () => {
    return ( 
    <>
        <section className={style.section}>
            <form className={style.form}>
                <p className={style.require}>* Champs obligatoires</p>
                <div className={style.divColumn}>
                    <label className={style.partie} htmlFor="name">Nom salle* :</label>
                    <input className={style.inputName} type="text" name="name" id="name" />
                </div>
                <div className={style.div}>
                    <p className={style.partie}>Adresse*</p>
                    <div className={style.divRowCenter}>
                        <label className={style.labelNumAdresse} htmlFor="num">Numéro :</label>
                        <input className={style.inputNumAdresse} type="text" name="" id="num" />
                    </div>
                    <div className={style.divRowCenter}>
                        <label htmlFor="voie">Voie :</label>
                        <input type="text" name="voie" id="voie" />
                    </div>
                    <div className={style.divRowCenter}>
                        <label htmlFor="postal">Code postal :</label>
                        <input className={style.inputCodePostal} type="number" name="postal" id="postal" />
                    </div>                    
                    <div className={style.divRowCenter}>
                        <label htmlFor="ville">Ville :</label>
                        <input type="text" name="ville" id="ville" />
                    </div>
                </div>
                <div>
                    <p className={style.partie}>Localisation :</p>
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
                    <p className={style.partie}>Contact* :</p>
                    <div  className={style.divSep}>
                        <label htmlFor="tel">Téléphone :</label>
                        <input className={style.inputCoord} type="tel" name="tel" id="tel" />
                    </div>
                </div>
                <div className={style.div}>
                    <label  className={style.partie} htmlFor="capacite">Capacités* :</label>
                    <input className={style.inputTel} type="number" name="capacite" id="capacite" />
                </div>
                <div className={style.div}>
                    <p className={style.partie}>SMAC* :</p>
                    <div className={style.divRowCenter}>
                        <div>
                            <label htmlFor="smac">Oui</label>
                            <input type="radio" name="sm" id="smac" />
                        </div>
                        <div>
                            <label htmlFor="smac-non">Non</label>
                            <input type="radio" name="sm" id="smac" />
                        </div>
                    </div>
                </div>
                <div>
                    <label className={style.partie} htmlFor="style">Styles* :</label>
                    <input type="text" name="style" id="style" />
                </div>
                <div>
                    <button>Validé</button>
                </div>

            </form>
        </section>
    </> 
    );
}
 
export default FormAddSalle;