import style from "./SearchBar.module.css"

const SearchBar = () => {

    const allStyle = ["jazz", "blues", "rock", "soul", "funk"];

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
                    {
                        allStyle.map((s, index) => {
                           return <option key={index}>{s}</option>
                        })
                    }
                </select>
            </div>
            <div className={style.divBtn}>
                <button className={style.btn}>Reset</button>
            </div>
        </div>
    </>
    );
}
 
export default SearchBar;