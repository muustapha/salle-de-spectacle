import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import FormEvent from "../pages/FormEvent";
import ErrorPage from "../pages/ErrorPage";
import Header from "../components/header/Header";   
import Footer from "../components/footer/Footer";

const Navigation = () => {

    return ( 
    <><Header/>
        <Router>
            <Routes>
                <Route path="/" exact element={<MainPage />} />
                <Route path="/detail-salle" exact element={<DetailPage />} />
                <Route path="/form-event" exact element={<FormEvent />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
        <Footer/>
    </> );
}
 
export default Navigation;