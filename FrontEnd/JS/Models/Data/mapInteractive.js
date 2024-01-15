


// URL de l'API
      var url = "https://localhost:44371/api/Salles/id?id=1"; // Remplacez "example.com" par le vrai domaine de votre API.

      // Faire une requête à l'API
      fetch(url)
        .then((response) => response.json()) // convertir la réponse en JSON
        .then((data) => {
          // extraire les coordonnées du JSON
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
        })
        .catch((error) => console.error("Erreur:", error));