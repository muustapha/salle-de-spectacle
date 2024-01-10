using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ApiSalleConcert.Models
{
	public class Salle
	{
		[BsonId]
		[BsonElement("_id")]
		[BsonRepresentation(BsonType.ObjectId)]
		public string Id { get; set; }

		[BsonElement("nom")]
		public string? Nom { get; set; } = null!;

		[BsonElement("adresse")]
		public Adresse? AdresseSalle { get; set; } = null!;

		[BsonElement("styles")]
		public List<string>? ListeStyle { get; set; } = null!;

		[BsonElement("avis")]
		public List<Avis>? ListeAvis { get; set; } = null!;

		[BsonElement("capacite")]
		public int? Capacite { get; set; }

		[BsonElement("smac")]
		public bool? Smac { get; set; }

		[BsonElement("contact")]
		public Contact? ContactSalle { get; set; } = null!;
	}
}
