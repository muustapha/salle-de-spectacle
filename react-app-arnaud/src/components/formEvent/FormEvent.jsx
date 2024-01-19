import style from "./FormEvent.module.css"

const FormEvent = () => {
    return (
    <>
        <div className={style.formList}>
            <div>
                <label htmlFor="name" className={style.label}>Nom salle :</label>
                <br/><input type="text" id="nomSalle"/>
            </div>
            <div>
                <label htmlFor="name" className={style.label}>Artiste :</label>
                <br/><input type="text" id="artiste"/>
            </div>
            <div>
                <label htmlFor="name" className={style.label}>Prix :</label>
                <br/><input type="text" id="prix"/>
            </div>
            <div>
                <label htmlFor="name" className={style.label}>Style :</label>
                <br/><select type="text" id="style">
                    <option value="">Choisir le style de musique</option>
                </select>
            </div>
            <div>
                <label htmlFor="name" className={style.label}>Date :</label>
                <br/><input type="date" id="date"/>
            </div>
            <div>
                <button id="btnAjouter">Ajouter</button>
            </div>
        </div>
    </>
    );
}
 
export default FormEvent;