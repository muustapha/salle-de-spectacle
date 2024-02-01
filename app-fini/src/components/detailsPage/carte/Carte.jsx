/* eslint-disable react/prop-types */
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from "react-leaflet";
import styles from "./Carte.module.css";
import "leaflet/dist/leaflet.css";

// eslint-disable-next-line react/prop-types
const Carte = ({ adresseSalle }) => {

    if (!adresseSalle || Object.keys(adresseSalle).length === 0) {
        // Les données de la salle ne sont pas encore disponibles
        return <p>Chargement...</p>;
      }

    return (
        <>
        <MapContainer className={styles.map} center={[adresseSalle.localisationAdresse.coordinates[0], adresseSalle.localisationAdresse.coordinates[0]]} zoom={13} scrollWheelZoom={false}>
             <TileLayer
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             />
             <Marker position={[adresseSalle.localisationAdresse.coordinates[1], adresseSalle.localisationAdresse.coordinates[0]]}>
                 <Popup>
                     A pretty CSS3 popup. <br /> Easily customizable.
                 </Popup>
             </Marker>
         </MapContainer></>
    );
}
 
export default Carte;