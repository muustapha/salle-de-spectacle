// Importation des différentes class pour effectuer l'ajout de l'avis => un PUT de la salle
import { Avis } from "../Models/Data/Avis.js";
import { Adresse } from "../Models/Data/Adresse.js";
import { Contact } from "../Models/Data/Contact.js";
import { Localisation } from "../Models/Data/Localisation.js";
import { Salle } from "../Models/Data/Salle.js";
import { serviceGetSalleById } from "../Services/Fetch.js";

// Récupération de la Date + Heure actuelle
let date = new Date().toISOString();

// // Récup de l'ID dans l'URL
let paramsSalle = new URLSearchParams(document.location.search);
let idSalle = paramsSalle.get("id");

//************Event sur les btn du formulaire*******************//
const sectionFormAvis = document.getElementById("page-ajout-avis");
const inputNoteAvis = document.getElementById("rating");
const btnAvis = document.querySelectorAll("[data-add]");

// instancier l'objet avis
let newAvis = new Avis();

// Ajout des données dans l'objet
inputNoteAvis.addEventListener("input", (e) => {
  newAvis.Date = date;
  newAvis.Note = e.target.value;
  return newAvis;
});

// Event quand on click sur le btn "Ajouter"
btnAvis.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.dataset.add == "ajouter") {
      console.log(newAvis);
    } else {
      sectionFormAvis.classList.add("visivility-hidden");
    }
  });
});
//**************************************************************//
//*******Création de l'Objet pour Salle pour le PUT*************//

//**************************************************************//
