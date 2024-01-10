using MongoDB.Bson.Serialization.Attributes;

namespace ApiSalleConcert.Models
{
    public class Localisation
    {
        [BsonElement("type")]
        public string? Type { get; set; } = null!;

        [BsonElement("coordinates")]
        public List<double>? Coordinates { get; set; } = null!;
    }
}
