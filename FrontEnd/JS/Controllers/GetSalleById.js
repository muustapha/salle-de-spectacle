// Récup de l'ID dans l'URL
let params = new URLSearchParams(document.location.search);
let id = params.get("id");

// Récup les données de L'Api (GetAllSalle)
const fetchData = async () => {
  await fetch(`https://localhost:44371/api/Salles/id?id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      var lat = data.adresseSalle.localisationAdresse.coordinates[0];
      var lon = data.adresseSalle.localisationAdresse.coordinates[1];

      // utiliser les coordonnées pour définir la vue de la carte
      var map = L.map("map").setView([lat, lon], 13);

      // Ajouter une couche de carte (par exemple, OpenStreetMap)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(map);

      // Ajouter un marqueur à la position
      L.marker([lat, lon]).addTo(map);
    })
    .catch((err) => console.log("Pas de GetAllSalle", err));
};

//*******************Card**************************************//
//*************************************************************//
//*******************Carte*************************************//
//*************************************************************//

// Pour que la fonction de l'API se lance au chargement de la page
window.addEventListener("DOMContentLoaded", async () => {
  await fetchData();
});
