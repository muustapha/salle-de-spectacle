window.onload = function() {
    // Récupérez le nom de la salle du stockage local
    var salleName = localStorage.getItem('selectedRoomName');

    // Utilisez AJAX pour récupérer les détails de la salle
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://localhost:44371/api/Salles/id' + salleName, true);
    xhr.onload = function() {
      if (this.status == 200) {
        var salle = JSON.parse(this.responseText);

        // Sélectionnez l'élément où vous voulez afficher les détails
        var salleDetailsElement = document.getElementById('section-affichage');

        // Définissez le contenu HTML de l'élément pour inclure les détails de la salle
        salleDetailsElement.innerHTML = `
          <h2>${salle.name}</h2>
          <p>${salle.description}</p>
          <p>${salle.city}</p>
          <p>${salle.style}</p>
        `;
      }
    }
};