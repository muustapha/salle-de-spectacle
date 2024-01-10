using MongoDB.Bson.Serialization.Attributes;

namespace ApiSalleConcert.Models
{
    public class Avis
    {
        [BsonElement("date")]
        public DateTime? Date { get; set; }

        [BsonElement("note")]
        public int? Note { get; set; }
    }
}
