import {
    MapContainer,
    TileLayer,
    Marker,
    Popup
} from "react-leaflet";
import styles from "./CarteInteractive.module.css";
import "leaflet/dist/leaflet.css";

const CarteInteractive = ({ latitude, longitude }) => {
    return (
        <MapContainer className={styles.MapContainer} center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default CarteInteractive;