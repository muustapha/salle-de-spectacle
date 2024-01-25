using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ApiSalleConcert.Models.Data
{
	public class Event
	{

		[BsonId]
		[BsonRepresentation(BsonType.ObjectId)]
		public string Id { get; set; }

		[BsonElement("idSalle")]
		public int IdSalle { get; set; }

		[BsonElement("artiste")]
		public string Artiste { get; set; }

		[BsonElement("prix")]
		public int Prix { get; set; }

		[BsonElement("style")]
		public string Style { get; set; }

		[BsonElement("date")]
		public DateTime Date { get; set; }
	}
}
