import SearchBar from "./searchBar/SearchBar";
import style from "./Main.module.css"

const Main = () => {
    return ( 
    <>
        <section className={style.sectionSearch}>
            <SearchBar />
        </section>
    </> 
    );
}
 
export default Main;