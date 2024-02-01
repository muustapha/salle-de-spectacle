import { useContext } from "react";
import Event from "./event/Event";
import { UserContext } from "../../context/UserContext";
import style from './ListeEvent.module.css'
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ListeEvent = ({event, id}) => {

    let { role } = useContext(UserContext);

    let navigate = useNavigate();

    const handleClick = () => {
        let path;
        path = `/formEvent/${id}/0`;
        navigate(path);
    }
    return ( 
    <> 
     <div>
        {
            // eslint-disable-next-line react/prop-types
            event && event.map((e, index) => {
                return <Event key={index} {...e} />
            })
        }
        </div>
        {
            (role == "true") && (
                <div className={style.div}>

            <button className={style.btn} onClick={handleClick}>Ajouter Event</button>
                </div>
            )
        }


    </>);
}
 
export default ListeEvent;