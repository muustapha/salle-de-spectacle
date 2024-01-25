using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ApiSalleConcert.Models.Data
{
    public class Style
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("types")]
        public List<string>? Types { get; set; } = null!;
    }
}
