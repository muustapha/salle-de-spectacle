using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;


namespace ApiSalleConcert.Models
{
	public class Salle
	{
		[BsonId]
		[BsonElement("_id")]
		public int? Id { get; set; }

		[BsonElement("nom")]
		public string? Nom { get; set; } = null!;

		[BsonElement("adresse")]
		public Adresse? AdresseSalle { get; set; } = null!;

		[BsonElement("styles")]
		public List<string>? Styles { get; set; } = null!;

		[BsonElement("avis")]
		public Avis[]? ListeAvis { get; set; } = null!;

		[BsonElement("capacite")]
		public int? Capacite { get; set; }

		[BsonElement("smac")]
		public bool? Smac { get; set; }

		[BsonElement("contact")]
		public Contact[]? ContactSalle { get; set; } = null!;

		[BsonElement("isDelete")]
		public bool IsDelete { get; set; } = false;

		public void Supprimer()
		{
			IsDelete = true;
			Nom = null;
			AdresseSalle = null;
			Styles = null;
			ListeAvis = null;
			Capacite = null;
			Smac = null;
			ContactSalle = null;
		}
    }
}
