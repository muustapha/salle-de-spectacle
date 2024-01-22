using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;

namespace ApiSalleConcert.Models.Dtos
{
	public class AuthDtosIn
	{
		public string Pseudo { get; set; }

		public string Mail { get; set; }

		public string Password { get; set; }

		public bool? IsAdmin { get; set; } = false;
	}
}
