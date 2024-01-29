import SearchBar from "./searchBar/SearchBar";
import AllCard from "./allCard/AllCard"
import style from "./Main.module.css"
import SearchProvider from '../context/SearchContext';

const Main = () => {

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