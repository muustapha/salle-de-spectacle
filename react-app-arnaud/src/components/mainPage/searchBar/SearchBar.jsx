import style from "./SearchBar.module.css"

const SearchBar = () => {
    return (
    <>
        <div className={style.SearchBarContainer}>
            <div className={style.SearchBarContainerLabelInput}>
                <label htmlFor="name" className={style.label}>Nom :</label>
                <input type="text" id="name"  className={style.input}/>
            </div>
            <div className={style.SearchBarContainerLabelInput}>
                <label htmlFor="city" className={style.label}>Ville :</label>
                <input type="text" id="city" className={style.input}/>
            </div>
            <div className={style.SearchBarContainerLabelInput}>
                <label htmlFor="style" className={style.label}>Style(s) :</label>
                <select id="style" className={style.input}>
                    <option></option>
                </select>
            </div>

        </div>
    </>
    );
}
 
export default SearchBar;