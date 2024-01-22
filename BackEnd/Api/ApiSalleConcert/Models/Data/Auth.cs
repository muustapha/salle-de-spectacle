﻿using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ApiSalleConcert.Models.Data
{
	public class Auth
	{
		public Auth(string pseudo, string mail, string password)
		{
			Pseudo = pseudo;
			this.mail = mail;
			Password = password;
		}

		[BsonId]
		[BsonRepresentation(BsonType.ObjectId)]
		public string Id { get; set; }

		[BsonElement("pseudo")]
		public string Pseudo { get; set; }

		[BsonElement("mail")]
		public string mail { get; set; }

		[BsonElement("password")]
		public string Password { get; set; }
	}
}
