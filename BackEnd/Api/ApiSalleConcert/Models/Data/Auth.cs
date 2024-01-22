using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ApiSalleConcert.Models.Data
{
	public class Auth
	{
		[BsonId]
		[BsonRepresentation(BsonType.ObjectId)]
		public string Id { get; set; }

		[BsonElement("pseudo")]
		public string Pseudo { get; set; }

		[BsonElement("mail")]
		public string Mail { get; set; }

		[BsonElement("password")]
		public string Password { get; set; }

		[BsonElement("isAdmin")]
		public bool? IsAdmin { get; set; } = false;
	}
}
