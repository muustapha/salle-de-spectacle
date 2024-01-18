import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import FormEvent from "../pages/FormEvent";
import ErrorPage from "../pages/ErrorPage";


const Navigation = () => {

    return ( 
    <>
        <Router>
            <Routes>
                <Route path="/" exact element={<MainPage />} />
                <Route path="/detail-salle/id?=:id" exact element={<DetailPage />} />
                <Route path="/form-event" exact element={<FormEvent />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    </> );
}
 
export default Navigation;