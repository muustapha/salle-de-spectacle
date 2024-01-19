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
<<<<<<< HEAD
                <Route path="/detail-salle" exact element={<DetailPage />} />
                <Route path="/form-event" exact element={<FormPage />} />
=======
                <Route path="/detail-salle/id" exact element={<DetailPage />} />
                <Route path="/form-event/id" exact element={<FormEvent />} />
                <Route path="/connexion" exact element={<ConnectionPage />} />
                <Route path="/profil" exact element={<ProfilePage />} />
>>>>>>> a1e34c35ab3c3ee85c946b6c4dc6f17c2f0706ee
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    </> );
}
 
export default Navigation;