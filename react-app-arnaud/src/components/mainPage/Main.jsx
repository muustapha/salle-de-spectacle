import SearchBar from "./searchBar/SearchBar";
import AllCard from "./allCard/AllCard"
import style from "./Main.module.css"
import SearchProvider from '../context/SearchContext';

const Main = () => {

    // const [searchInfo, setSearchInfo] = useState("")

    // const handleInputChange = (nouvelleValeur) => {
    //     // Mettre à jour l'état dans le composant parent avec les données du composant enfant
    //     setSearchInfo(nouvelleValeur);
    //   };
    // onInputChange={handleInputChange}
    //   console.log(searchInfo);

    return ( 
    <>
    {/* Pemet d'appliquer le context au enfant */}
        <SearchProvider>
            <section className={style.section}>
                <SearchBar  />
            </section>
            <section className={style.section}>
                <AllCard />
            </section>
        </SearchProvider>
    </> 
    );
}
 
export default Main;