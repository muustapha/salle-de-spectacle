import style from "./SearchBar.module.css"

const SearchBar = () => {
    return (
    <>
        <div className={style.SearchBarContainer}>
            <div className={style.SearchBarContainer}>
                <label htmlFor="name" className={style.label}>Nom :</label>
                <input type="text" id="name"/>
            </div>
            <div className={style.SearchBarContainer}>
                <label htmlFor="city" className={style.label}>Ville :</label>
                <input type="text" id="city"/>
            </div>
            <div className={style.SearchBarContainer}>
                <label htmlFor="style" className={style.label}>Style(s) :</label>
                <select id="name">
                    <option></option>
                </select>
            </div>

        </div>
    </>
    );
}
 
export default SearchBar;