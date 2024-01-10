using MongoDB.Bson.Serialization.Attributes;

namespace ApiSalleConcert.Models
{
    public class Adresse
    {
        [BsonElement("numero")]
        public int? Numero { get; set; }

        [BsonElement("voie")]
        public string? Voie { get; set; } = null!;

        [BsonElement("codePostal")]
        public string? CodePostal { get; set; } = null!;

        [BsonElement("ville")]
        public string? Ville { get; set; } = null!;

        [BsonElement("localisation")]
        public Localisation? LocalisationAdresse { get; set; } = null!;
    }
}
