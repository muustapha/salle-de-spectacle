import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import FormEvent from "../pages/FormEvent";
import ErrorPage from "../pages/ErrorPage";
import ConnectionPage from "../pages/ConnectionPage";
import ProfilePage from "../pages/ProfilePage"


const Navigation = () => {

    return ( 
    <>
        <Router>
            <Routes>
                <Route path="/" exact element={<MainPage />} />
                <Route path="/detail-salle/id" exact element={<DetailPage />} />
                <Route path="/form-event/id" exact element={<FormEvent />} />
                <Route path="/connexion" exact element={<ConnectionPage />} />
                <Route path="/profil" exact element={<ProfilePage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    </> );
}
 
export default Navigation;