import React, { useEffect, useState } from 'react';
import SalleDetail from "../components/DetailSalle/SalleDetail/SalleDetail";
import axios from 'axios';
import CarteInteractive from '../components/DetailSalle/CarteInteractive/CarteInteractive';
import Calendrier from '../components/DetailSalle/Calendrier/Calendrier';
import Avis from '../components/DetailSalle/Avis/Avis';
import './DetailPage.css';
import AjouterAvis from '../components/DetailSalle/AjouterAvis/AjouterAvis';
const DetailPage = () => {
  const [salle, setSalle] = useState({});
  const url = 'http://localhost:27290/api/Salles/id?id=2';
  console.log(salle)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (response.data) {
          setSalle(response.data);
        } else {
          throw new Error('No data received');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  // Si les informations de la salle ne sont pas encore chargées
  if (Object.keys(salle).length === 0) {
    return "Chargement en cours...";
  }

  // Retour du JSX si les informations de la salle sont chargées
  return (
    <>
      <SalleDetail
        nom={salle.nom}
        adresse={salle.adresseSalle}
        smac={salle.smac}
        capacite={salle.capacite}
        musicStyles={salle.styles}
      />
      <CarteInteractive
        latitude={salle.adresseSalle.localisationAdresse.coordinates[0]}
        longitude={salle.adresseSalle.localisationAdresse.coordinates[1]}
      />
      <Calendrier />
      <p className="title">Avis : </p>
    <div className="listeAvis"> {
        salle.listeAvis.map((avis) => {return <Avis date={avis.date} note={avis.note} />})

       }</div>

<AjouterAvis />
    </>
  );
}

export default DetailPage;