import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainPage from "../pages/MainPage";
import DetailsPage from "../pages/DetailsPage";
import FormPage from "../pages/FormPage";
import ErrorPage from "../pages/ErrorPage";
import ConnectionPage from "../pages/ConnectionPage";
import ProfilePage from "../pages/ProfilePage"
import AddSallePage from "../pages/AddSallePage";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer"

 
const Navigation = () => {



    return ( 
    <>
        <Router>
            <Header/>
                <Routes>
                    <Route path="/" exact element={<MainPage />} />
                    <Route path="/formSalle/:id" exact element={<AddSallePage />} />
                    <Route path="/detail-salle/:id" exact element={<DetailsPage />} />
                    <Route path="/connexion" exact element={<ConnectionPage />} />
                    <Route path="/profil" exact element={<ProfilePage />} />
                    <Route path="/formEvent/:idSalle/:idEvent" exact element={<FormPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            <Footer/>
        </Router>
    </> );
}
 
export default Navigation;