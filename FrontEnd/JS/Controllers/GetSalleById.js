// Récup les données de L'Api (GetAllSalle)
const fetchData = async () => {
  await fetch("https://localhost:44371/api/Salles")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log("Pas de GetAllSalle", err));
};

// Pour que la fonction de l'API se lance au chargement de la page
window.addEventListener("DOMContentLoaded", async () => {
  await fetchData();
});
