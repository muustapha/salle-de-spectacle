// Supposons que chaque élément de salle a une classe 'salle-item' et que le nom de la salle est stocké dans un attribut 'data-name'
var salleItems = document.querySelectorAll(".salle-item");

salleItems.forEach(function (item) {
  item.addEventListener("click", function () {
    // Récupérez le nom de la salle de l'attribut 'data-name'
    var salleName = this.getAttribute("data-name");

    // Stockez le nom de la salle dans le stockage local
    localStorage.setItem("selectedRoomName", salleName);
  });
});

// Obtenez l'élément de titre
var titleElement = document.getElementById("nom-salle");

// Récupérez le nom de la salle du stockage local
var roomName = localStorage.getItem("selectedRoomName");

// Définissez le titre
titleElement.innerText = roomName;
("");
