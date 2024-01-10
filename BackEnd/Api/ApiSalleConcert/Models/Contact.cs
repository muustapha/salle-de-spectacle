using MongoDB.Bson.Serialization.Attributes;

namespace ApiSalleConcert.Models
{
    public class Contact
    {
        [BsonElement("telephone")]
        public string? Telephone { get; set; } = null!;
    }
}
