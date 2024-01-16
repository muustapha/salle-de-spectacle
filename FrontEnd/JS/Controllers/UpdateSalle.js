// Importation des différentes class pour effectuer l'ajout de l'avis => un PUT de la salle
import { Avis } from "../Models/Data/Avis.js";
import { Adresse } from "../Models/Data/Adresse.js";
import { Contact } from "../Models/Data/Contact.js";
import { Localisation } from "../Models/Data/Localisation.js";
import { Salle } from "../Models/Data/Salle.js";

// Récupération de la Date + Heure actuelle
let date = new Date().toISOString();

// // Récup de l'ID dans l'URL
let paramsSalle = new URLSearchParams(document.location.search);
let idSalle = paramsSalle.get("id");

//************Event sur les btn du formulaire*******************//
const sectionFormAvis = document.getElementById("page-ajout-avis");
const inputNote = document.querySelector(".input-avis");
const btnAvis = document.querySelectorAll("[data-add]");

inputNote.addEventListener("input", (e) => {
  console.log(e.target.value);
});

console.log(btnAvis);

btnAvis.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.dataset.add == "ajouter") {
    } else {
      sectionFormAvis.classList.add("visivility-hidden");
    }
  });
});

//**************************************************************//
