import { createContext, useState } from "react";

export const SearchContext = createContext({
    nom:"",
    ville:"",
    styles:"",
    updateSearch: () =>  {},
})

// eslint-disable-next-line react/prop-types
const SearchProvider = ({ children }) => {
    // State du context
    const [search, setSearch] = useState({
        nom: "",
        ville: "",
        styles: "",
    });

    // On récup et on modifit si besoin
    const updateSearch = (newSearch) => {
        setSearch((prevSearch) => ({ ...prevSearch, ...newSearch }));
    };

    // on l'applique au enfant
    return (
        <SearchContext.Provider value={{ ...search, updateSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchProvider;