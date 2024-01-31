import React, { useEffect, useState } from 'react';
import SalleDetail from "../components/DetailSalle/SalleDetail/SalleDetail";
import axios from 'axios';
import CarteInteractive from '../components/DetailSalle/CarteInteractive/CarteInteractive';
import Calendrier from '../components/DetailSalle/Calendrier/Calendrier';
import Avis from '../components/DetailSalle/Avis/Avis';
import AjouterAvis from '../components/DetailSalle/AjouterAvis/AjouterAvis';
import AjouterEvenement from '../components/DetailSalle/AjouterEvenement/AjouterEvenement';
import Evenement from '../components/DetailSalle/Evenement/Evenement';
import './DetailPage.css';

const DetailPage = () => {
  const [salle, setSalle] = useState({});
  const [events, setEvents] = useState({}); // Ajoutez un nouvel état pour l'événement

  const urlSalle = 'http://localhost:27290/api/Salles/id?id=2';
  const urlEvents = 'http://localhost:27290/api/event';
  const _id = 2; // Définissez selectedSalleId. Remplacez 2 par l'id de la salle sélectionnée.
let role = localStorage.getItem('role');
 
  useEffect(() => {
    const fetchData = async () => {
      try { 
        const responseSalle = await axios.get(urlSalle);
        const responseEvents = await axios.get(urlEvents);
        
        if (responseSalle.data) {
          setSalle(responseSalle.data);
  
          if (responseEvents.data) {
            console.log(responseEvents.data)
            const filteredEvents = responseEvents.data.filter(event => {
              console.log(event)
              return event.idSalle === _id
            });
            console.log(filteredEvents)
            setEvents(filteredEvents); // Mettez à jour l'état de l'événement avec les données filtrées
          }
        }
        if (!responseSalle.data && !responseEvents.data) {
          throw new Error('No data received');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, []); // Ajoutez selectedSalleId comme dépendance si nécessaire
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
        salle.listeAvis.map((avis, index) => { return <Avis key={index} date={avis.date} note={avis.note} /> })
      }
</div><AjouterAvis />
<p className="title1">Evènements : </p>
<div className="listeEvenement">
        {events.map((event, index) => (
  <Evenement
    key={index}
    artiste={event.artiste}
    prix={event.prix}
    style={event.style}
    date={event.date}
 />
 
))} 

</div>
     
     <div className='boutton'>  
      {role ? <AjouterEvenement /> : ""}
      </div>
      
    </>
  );
}

export default DetailPage;