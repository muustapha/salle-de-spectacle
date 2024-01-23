import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailPage from "../pages/DetailPage";
import FormPage from "../pages/FormPage";
import ErrorPage from "../pages/ErrorPage";
import ConnectionPage from "../pages/ConnectionPage";
import ProfilePage from "../pages/ProfilePage"
import AddSallePage from "../pages/AddSallePage";

const Navigation = () => {

    return ( 
    <>
        <Router>
            <Routes>
                <Route path="/" exact element={<MainPage />} />
                <Route path="/add-salle/id" exact element={<AddSallePage />} />
                <Route path="/detail-salle/id" exact element={<DetailPage />} />
                <Route path="/connexion" exact element={<ConnectionPage />} />
                <Route path="/profil" exact element={<ProfilePage />} />
                <Route path="/formEvent" exact element={<FormPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    </> );
}
 
export default Navigation;