import style from "./SearchBar.module.css"
import { useContext, useEffect, useState  } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";

// onInputChange
const SearchBar = () => {
    // récup du context (mais que la partie fonction)
    const { updateSearch } = useContext(SearchContext);
    const [allStyle, setAllStyle] = useState([]);

    useEffect(() => {
        axios
            .get(`${import.meta.env.VITE_REACT_APP_API_URL}Style`)
            .then((res) =>  setAllStyle(res.data[0].types))
            .catch((err) => console.log(err))
    }, [])

    

    // on joue la fonction du context pour le mettre a jour
    const handleInputChange = (field, value) => {
        updateSearch({ [field]: value });
    };

    const resetSearch = () => {
        const arrayInput = document.querySelectorAll("[data-searchinput]");
        arrayInput.forEach((input) => {
            input.value = "";
        })
        updateSearch({nom:"", ville:"", styles: ""})
    }
    return (
    <>
        <div className={style.SearchBarContainer}>
            <div className={style.SearchBarContainerLabelInput}>
                <label htmlFor="name" className={style.label}>Nom :</label>
                <input type="text" id="name" data-searchinput="input"  className={style.input} onChange={(e) => handleInputChange("nom", e.target.value)}/>
            </div>
            <div className={style.SearchBarContainerLabelInput}>
                <label htmlFor="city" className={style.label}>Ville :</label>
                <input type="text" id="city" data-searchinput="input" className={style.input} onChange={(e) => handleInputChange("ville",e.target.value)}/>
            </div>
            <div className={style.SearchBarContainerLabelInput}>
                <label htmlFor="style" className={style.label}>Style:</label>
                <select id="style" data-searchinput="select" className={style.input} onChange={(e) => handleInputChange("styles", e.target.value)}>
                    <option></option>
                    {
                        allStyle.map((s, index) => {
                           return <option key={index}>{s}</option>
                        })
                    }
                </select>
            </div>
        </div>
            <div className={style.divBtn}>
                <button className={style.btn} onClick={resetSearch}>Reset</button>
            </div>
    </>
    );
}
 
export default SearchBar;