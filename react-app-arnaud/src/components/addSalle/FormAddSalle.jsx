import style from "./FormAddSalle.module.css";

const FormAddSalle = () => {
    return ( 
    <>
        <section className={style.section}>
            <form className={style.from}>
                <div className={style.div}>
                    <label htmlFor="name">Nome de la salle :</label>
                    <input type="text" name="name" id="name" />
                </div>
                <div className={style.div}>
                    <p>Adresse :</p>
                    <div>
                        <label htmlFor="num">Numéro :</label>
                        <input type="text" name="num" id="num" />
                    </div>
                    <div>
                        <label htmlFor="voie">Voie :</label>
                        <input type="text" name="voie" id="voie" />
                    </div>
                    <div>
                        <label htmlFor="postal">Code postal :</label>
                        <input type="number" name="postal" id="postal" />
                    </div>
                    <div>
                        <p>Localisation :</p>
                        <div>
                            <div>
                                <label htmlFor="coordonnées-x">Coordonnée x:</label>
                                <input type="text" name="coordonnées-x" id="coordonnées-x" />
                            </div>
                            <div>
                            <label htmlFor="coordonnées-y">Coordonnée y:</label>
                                <input type="text" name="coordonnées-y" id="coordonnées-y" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.div}>
                    <p>Contact :</p>
                    <div>
                        <label htmlFor="tel">Téléphone :</label>
                        <input type="tel" name="tel" id="tel" />
                    </div>
                </div>
                <div className={style.div}>
                    <label htmlFor="capacite">Capacités :</label>
                    <input type="number" name="capacite" id="capacite" />
                </div>
                <div className={style.div}>
                    <p>SMAC :</p>
                    <div>
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
                    <label htmlFor="style">Styles :</label>
                    <input type="text" name="style" id="style" />
                </div>

            </form>
        </section>
    </> 
    );
}
 
export default FormAddSalle;