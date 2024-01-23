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
<<<<<<< HEAD
                <Route path="/add-salle/id" exact element={<AddSallePage />} />
                <Route path="/detail-salle/id" exact element={<DetailPage />} />
                <Route path="/form-event/id" exact element={<FormEvent />} />
                <Route path="/connexion" exact element={<ConnectionPage />} />
                <Route path="/profil" exact element={<ProfilePage />} />
=======
                <Route path="/detail-salle" exact element={<DetailPage />} />
                <Route path="/form-event" exact element={<FormPage />} />
>>>>>>> 57097bba048cec1c1eb7e66f3cd38929b7c43f7d
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    </> );
}
 
export default Navigation;