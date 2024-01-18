import SearchBar from "./searchBar/SearchBar";
import style from "./Main.module.css"
import AllCard from "./allCard/AllCard";

const Main = () => {
    return ( 
    <>
        <section className={style.section}>
            <SearchBar />
        </section>
        <section className={style.section}>
            <AllCard />
        </section>
    </> 
    );
}
 
export default Main;