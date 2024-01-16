// // Récup de l'ID dans l'URL
// let params = new URLSearchParams(document.location.search);
// let id = params.get("id");

//************Récup des données du form*******************//
const formAvis = document.getElementById("form-avis");
const inputNote = document.querySelector(".input-avis");

let date = new Date().now();
console.log(date);

inputNote.addEventListener("input", (e) => {
  console.log(e.target.value);
});
const onSubmit = () => {
  const form = new FormData();
  form.append("note", inputNote.value);
};
//********************************************************//
