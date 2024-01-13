// Récup de la section
const sectionAffichage = document.getElementById("section-affichage");

// Récup les données de L'Api (GetAllSalle)
const fetchData = async () => {
  await fetch("https://localhost:44371/api/Salles/GetAllNotDelete")
    .then((res) => res.json())
    .then((data) => createAllCard(data))
    .catch((err) => console.log("Pas de GetAllSalle", err));
};

const displayElementBoucle = (data) => {
  let style = "";
  data.forEach((element) => {
    style += element + " ";
  });
  return style;
};

// Fonction pour créer la card
const createCard = ({ nom, ville, styles, capacite }) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const divInfoCard = document.createElement("div");
  divInfoCard.classList.add("infos-card");

  const pNomSalle = document.createElement("h3");
  pNomSalle.classList.add("info-salle");
  pNomSalle.innerText = nom;
  const pVilleSalle = document.createElement("p");
  pVilleSalle.classList.add("info-salle");
  pVilleSalle.innerText = "Localisation : " + ville;
  const pSytleSalle = document.createElement("p");
  pSytleSalle.classList.add("info-salle");
  pSytleSalle.innerText = "Style(s) : " + displayElementBoucle(styles);
  const pCapaciteSalle = document.createElement("p");
  pCapaciteSalle.classList.add("info-salle");
  pCapaciteSalle.innerText = "Capacitées : " + capacite + " personnes";

  const divBtnCard = document.createElement("div");
  divBtnCard.classList.add("btn-card");
  const btn = document.createElement("button");
  btn.classList.add("more-info-btn");
  btn.innerHTML = "Détails";
  divBtnCard.appendChild(btn);

  divInfoCard.appendChild(pNomSalle);
  divInfoCard.appendChild(pVilleSalle);
  divInfoCard.appendChild(pSytleSalle);
  divInfoCard.appendChild(pCapaciteSalle);
  divInfoCard.appendChild(divBtnCard);

  card.appendChild(divInfoCard);

  sectionAffichage.appendChild(card);
};

const createAllCard = (data) => {
  console.log(data);
  data.forEach((card) => {
    createCard(card);
  });
};

// Pour que la fonction de l'API se lance au chargement de la page
window.addEventListener("DOMContentLoaded", async () => {
  await fetchData();
});
