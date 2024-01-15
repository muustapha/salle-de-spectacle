document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var date = new Date();
    var dateString = date.toLocaleString();
    
    var rating = document.getElementById('rating').value;
    
    if (rating >= 0 && rating <= 10) {
        var avis = {
            note: rating,
            date: dateString
        };
        
        document.getElementById('message').textContent = 'Merci pour votre avis! Note: ' + avis.note + ', Date et heure: ' + avis.date;
    } else {
        document.getElementById('message').textContent = 'Veuillez entrer une note entre 0 et 10.';
    }
});