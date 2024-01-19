import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import FormPage from "../pages/FormPage";
import ErrorPage from "../pages/ErrorPage";
import ConnectionPage from "../pages/ConnectionPage";
import ProfilePage from "../pages/ProfilePage"

const Navigation = () => {

    return ( 
    <>
        <Router>
            <Routes>
                <Route path="/" exact element={<MainPage />} />
                <Route path="/detail-salle" exact element={<DetailPage />} />
                <Route path="/form-event" exact element={<FormPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    </> );
}
 
export default Navigation;