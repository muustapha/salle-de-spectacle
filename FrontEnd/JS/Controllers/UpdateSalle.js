// Importation des différentes class pour effectuer l'ajout de l'avis => un PUT de la salle
import { Avis } from "../Models/Data/Avis.js";
import { serviceGetSalleById, serviceUpdateSalle } from "../Services/Fetch.js";

const fetchDataId = async () => {
  // Récup de l'ID dans l'URL
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  let data = await serviceGetSalleById(id);

  data.listeAvis.push(newAvis);
  await serviceUpdateSalle(data.id, data);
};

//************Event sur les btn du formulaire*******************//
const sectionFormAvis = document.getElementById("page-ajout-avis");
const inputNoteAvis = document.getElementById("rating");
const btnAvis = document.querySelectorAll("[data-add]");

// instancier l'objet avis
let newAvis = new Avis();

// Ajout des données dans l'objet
inputNoteAvis.addEventListener("input", (e) => {
  newAvis.Date = new Date().toISOString();
  newAvis.Note = e.target.value;
  return newAvis;
});

// Event quand on click sur le btn "Ajouter"
btnAvis.forEach((btn) => {
  btn.addEventListener("click", async (e) => {
    if (e.target.dataset.add == "ajouter") {
      await fetchDataId();
    } else {
      sectionFormAvis.classList.add("visivility-hidden");
    }
  });
});
//**************************************************************//
//*******Création de l'Objet pour Salle pour le PUT*************//

//**************************************************************//
