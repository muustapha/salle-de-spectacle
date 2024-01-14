//*************** Récup les données de L'Api (GetAllSalle) ***************//
//#region
// Récup de la section
const sectionAffichage = document.getElementById("section-affichage");
// Fetch les données de l'API
// const fetchData = async () => {
//   await fetch("https://localhost:44371/api/Salles/GetAllResearched")
//     .then((res) => res.json())
//     .then((data) => createAllCard(data))
//     .catch((err) => console.log("Pas de GetAllSalle", err));
// };
// Affiche le tableau des styles
const displayElementBoucle = (data) => {
  let style = "";
  data.forEach((element) => {
    style += element + " ";
  });
  return style;
};
// Fonction pour créer la cardcreateAllCard
const createCard = ({ id, nom, ville, styles, capacite }) => {
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
  btn.setAttribute("data-id", id);
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
// Créer toutes les cartes
const createAllCard = (data) => {
  data.forEach((card) => {
    createCard(card);
  });
};
//#endregion
//************************************************************************//
//********* Récup les données issus des inputs (recherche) ***************//
//#region
// Mettre les styles dans le select
const displayStyleInSelect = () => {
  let arrayOfStyle = ["jazz", "soul", "funk", "blues", "rock"];
  const inputSelect = document.getElementById("stylesSalle");

  arrayOfStyle.forEach((style) => {
    let selectOption = document.createElement("option");
    selectOption.innerHTML = style;

    inputSelect.appendChild(selectOption);
  });
};
// Récupération des inputs et actualisation des salles en temps réel
// URL de l'API => https://localhost:44371/api/Salles/GetAllResearched?nomRecherche=s&villeRecherchee=l&styleRecherche=blues
let allInput = document.querySelectorAll("[data-input]");
let saisiInputNomSalle = "";
let saisiInputVilleSalle = "";
let saisiSelectStyle = "";

// récupération des inputs remplit pour l'utilisateur
allInput.forEach((elemnt) => {
  // Si c'est un INPUT
  if (elemnt.tagName == "INPUT") {
    elemnt.addEventListener("input", (e) => {
      if (e.target.id == "nameSalle") {
        saisiInputNomSalle = e.target.value;
      } else {
        saisiInputVilleSalle = e.target.value;
      }
      fetchSearchData(
        saisiInputNomSalle,
        saisiInputVilleSalle,
        saisiSelectStyle
      );
    });
  } else {
    // Si c'est un SELECT
    elemnt.addEventListener("change", (e) => {
      saisiSelectStyle += e.target.value;
      fetchSearchData(
        saisiInputNomSalle,
        saisiInputVilleSalle,
        saisiSelectStyle
      );
    });
  }
});

// fonction pour fetch ave la recherche
const fetchSearchData = async (nom = " ", ville = " ", style = " ") => {
  let arrayData = [];
  await fetch(
    `https://localhost:44371/api/Salles/GetAllResearched?nomRecherche=${nom}&villeRecherchee=${ville}&styleRecherche=${style}`
  )
    .then((res) => res.json())
    .then((data) => {})
    .catch((err) => console.log("petit problème" + err));
};

// Affichage
//#endregion
//************************************************************************//
// Pour que la fonction de l'API se lance au chargement de la page
window.addEventListener("DOMContentLoaded", async () => {
  await fetchSearchData();
  displayStyleInSelect();
});
