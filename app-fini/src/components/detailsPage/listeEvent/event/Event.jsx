import Style from "./Event.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Event = ({ id, idSalle, artiste, prix, style, date }) => {
  let { role, token } = useContext(UserContext);

  const dateObject = new Date(date);

  let navigate = useNavigate();

  const config = {
    headers: {
      Authorization: `Bearer ${token}`},
}

  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formattedDate = dateObject.toLocaleDateString("fr-FR", options);

  const handelClick = async (e) => {
    let path;
    let confirmation;
    switch (e.target.dataset.event) {
      case "update":
        path = `/formEvent/${idSalle}/${id}`;
        navigate(path);
        break;
      case "delete":
        confirmation = window.confirm("Voulez-vous vraiment supprimer cet event ?");
    
        if (confirmation) {
            await axios
                    .delete(`${import.meta.env.VITE_REACT_APP_API_URL}Event/${id}`, config)
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err + "pas delete pb axios"))
          
        } else {
          console.log("Suppression annulée.");
        }
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={role ? Style.div : Style.divNo}>
        <div>
          <p className={Style.p}>
            <strong>{artiste}</strong>
          </p>
          <p className={Style.p}>{prix} €</p>
          <p className={Style.p}>style : {style}</p>
          <p className={Style.p}>{formattedDate}</p>
        </div>
        {(role == "true")? (
          <div className={Style.containerBtn}>
            <div className={Style.divBtn}>
              <button
                onClick={(e) => handelClick(e)}
                data-event="update"
                className={Style.bouton}
              >
                <FontAwesomeIcon className={Style.icon} icon={faPen} />
              </button>
            </div>
            <div className={Style.divBtn}>
              <button
                onClick={(e) => handelClick(e)}
                data-event="delete"
                className={Style.bouton}
              >
                <FontAwesomeIcon className={Style.icon} icon={faTrash} />
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Event;
