// Récup de l'ID dans l'URL
let params = new URLSearchParams(document.location.search);
let id = params.get("id");

// Récup les données de L'Api (GetAllSalle)
const fetchData = async () => {
  await fetch(`https://localhost:44371/api/Salles/id?id=${id}`)
    .then((res) => res.json())
    .then((data) => {
      displayDescriptionSalle(data);
      displayAvis(data);
      //*******************Affichage de la map***********************//
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
      //*************************************************************//
    })
    .catch((err) => console.log("Pas de GetAllSalle", err));
};
//*******************Dispolay info*****************************//
const displayDescriptionSalle = ({
  nom,
  adresseSalle,
  capacite,
  smac,
  styles,
}) => {
  const nomPage = document.getElementById("salle");
  const descriptionSalle = document.querySelectorAll("[data-adresse]");

  nomPage.innerHTML = nom + " - details salle";

  for (let i = 0; i < descriptionSalle.length; i++) {
    if (descriptionSalle[i].dataset.adresse == "nom") {
      descriptionSalle[i].innerHTML = nom;
    }
    if (descriptionSalle[i].dataset.adresse == "adresse") {
      descriptionSalle[i].innerHTML =
        adresseSalle.numero == null
          ? adresseSalle.voie
          : adresseSalle.numero + " " + adresseSalle.voie;
    }
    if (descriptionSalle[i].dataset.adresse == "code") {
      descriptionSalle[i].innerHTML = adresseSalle.codePostal;
    }
    if (descriptionSalle[i].dataset.adresse == "ville") {
      descriptionSalle[i].innerHTML = adresseSalle.ville;
    }
    if (descriptionSalle[i].dataset.adresse == "capacite") {
      descriptionSalle[i].innerHTML = capacite + " Personnes";
    }
    if (descriptionSalle[i].dataset.adresse == "smac") {
      if (smac == true) {
        descriptionSalle[i].innerHTML = "Oui";
      } else {
        descriptionSalle[i].innerHTML = "Nom";
      }
    }
    if (descriptionSalle[i].dataset.adresse == "style") {
      descriptionSalle[i].innerHTML = displayElementBoucle(styles);
    }
  }
};

// pour afficher les styles
const displayElementBoucle = (data) => {
  let style = "";
  data.forEach((element) => {
    style += element + " ";
  });
  return style;
};
//*************************************************************//
//*******************Display Avis******************************//
const displayAvis = ({ listeAvis }) => {
  let containerAvis = document.querySelector(".container-avis");
  if (listeAvis != null) {
    listeAvis.forEach((a) => {
      const divAvis = document.createElement("div");
      divAvis.classList.add("avis");

      const pAvis = document.createElement("p");
      pAvis.classList.add("avis-note");
      pAvis.innerHTML = a.note + " / 10";

      const pDate = document.createElement("p");
      pDate.classList.add("avis-date");
      let dateOrigine = new Date(a.date);
      let options = { day: "2-digit", month: "2-digit", year: "numeric" };
      pDate.innerHTML = dateOrigine.toLocaleDateString("fr-FR", options);

      divAvis.appendChild(pAvis);
      divAvis.appendChild(pDate);

      containerAvis.appendChild(divAvis);
    });
  }
};
//*************************************************************//
//********************Ajouter Avis*****************************//
const btnAjoutAvis = document.getElementById("ajout-avis");
btnAjoutAvis.addEventListener("click", () => {
  const sectionFormAvis = document.getElementById("page-ajout-avis");
  sectionFormAvis.classList.remove("visivility-hidden");
});
//*************************************************************//

// Pour que la fonction de l'API se lance au chargement de la page
window.addEventListener("DOMContentLoaded", async () => {
  await fetchData();
});
