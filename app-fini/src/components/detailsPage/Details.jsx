import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import About from "./aPropos/About";
import Carte from "./carte/Carte";
import Calendrier from "./calendrier/Calendrier";
import ListeAvis from "./listeAvis/ListesAvis";
import style from "./Details.module.css";
import ListeEvent from "./listeEvent/ListeEvent";
import { UserContext } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

const Details = () => {
  const [salle, setSalle] = useState([]);
  const [event, setEvent] = useState([]);
  var { id } = useParams();

  let { role, token } = useContext(UserContext);

  let navigate = useNavigate()

  let arrayEvent = [];

  const config = {
    headers: {
      Authorization: `Bearer ${token}`},
}

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_REACT_APP_API_URL}Salles/id?id=${id}`)
      .then((res) => setSalle(res.data))
      .catch((err) => console.log(err + "Pas de salle"));
  }, [id]);

  useEffect(() => {
    axios
    .get(`${import.meta.env.VITE_REACT_APP_API_URL}Event`)
    .then((res) => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        arrayEvent = res.data.filter((e) => e.idSalle == id);
        setEvent(arrayEvent);
    })
    .catch((err) => console.log(err + "Pas de event"));
  }, [id])

  const handelClick = async (e) => {
    let salleId;
    let newPath;
    let confirmation;
    switch (e.target.dataset.salle) {
      case "update":
        salleId = window.location.pathname.split('/').pop();
        newPath = `/formSalle/${salleId}`;
        navigate(newPath);
        break;
      case "delete":
        confirmation = window.confirm("Voulez-vous vraiment supprimer cet event ?");
    
        if (confirmation) {
            await axios
                    .delete(`${import.meta.env.VITE_REACT_APP_API_URL}Salles/id?id=${id}`, config)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err + "pas delete pb axios"))

            navigate("/");
          
        } else {
          console.log("Suppression annulée.");
        }
        break;
      default:
        break;
    }

  }

  return (
    <>
    {
      (role == "true" ) ? (
        <div className={style.divUpdate}>
          <h2 className={style.h2}>{salle.nom}</h2>
          <button data-salle="update" onClick={handelClick} className={style.btnUpdate}> 
          <FontAwesomeIcon className={style.icon} icon={faPen} />
          </button>
          <button data-salle="delete" onClick={handelClick} className={style.btnUpdate}> 
          <FontAwesomeIcon className={style.icon} icon={faTrash} />
          </button>
        </div>
      ) : 
      <h2 className={style.h2}>{salle.nom}</h2>
    }
      <section className={style.section}>
        <About {...salle} />
      </section>
  <div className={style.div}>
      <section className={style.sectionCarte}>
        <Carte {...salle} />
      </section>
      <section className={style.sectionCalendrier}>
        <Calendrier />
      </section>
      </div>
      <div className={style.divAvisEvent}>
      <section className={style.sectionCalendrier}>
        <h2 className={style.categorie}>Avis</h2>
        {salle.listeAvis || salle.listeAvis == null ? (
          <ListeAvis salle={salle} id={id}/>
        ) : (
          <p>Aucun avis disponible</p>
        )}
      </section>
      <section className={style.sectionCalendrier}>
        <h2 className={style.categorie}>Evenements</h2>
        <ListeEvent event={event} id={id} />
      </section>
      </div>
    </>
  );
};

export default Details;
