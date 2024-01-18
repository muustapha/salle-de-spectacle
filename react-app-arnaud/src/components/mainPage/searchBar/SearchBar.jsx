import style from "./SearchBar.module.css"
import { useContext  } from "react";
import { SearchContext } from "../../context/SearchContext";

// onInputChange
const SearchBar = () => {
    // récup du context (mais que la partie fonction)
    const { updateSearch } = useContext(SearchContext);

    const allStyle = ["jazz", "blues", "rock", "soul", "funk"];

    // on joue la fonction du context pour le mettre a jour
    const handleInputChange = (field, value) => {
        updateSearch({ [field]: value });
    };

    return (
    <>
        <div className={style.SearchBarContainer}>
            <div className={style.SearchBarContainerLabelInput}>
                <label htmlFor="name" className={style.label}>Nom :</label>
                <input type="text" id="name"  className={style.input} onChange={(e) => handleInputChange("nom", e.target.value)}/>
            </div>
            <div className={style.SearchBarContainerLabelInput}>
                <label htmlFor="city" className={style.label}>Ville :</label>
                <input type="text" id="city" className={style.input} onChange={(e) => handleInputChange("ville",e.target.value)}/>
            </div>
            <div className={style.SearchBarContainerLabelInput}>
                <label htmlFor="style" className={style.label}>Style(s) :</label>
                <select id="style" className={style.input} onChange={(e) => handleInputChange("styles", e.target.value)}>
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