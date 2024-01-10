
using ApiSalleConcert.Models.Data;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Core.Configuration;
us

namespace ApiSalleConcert
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			builder.Services.Configure<SalleDatabaseSettings>(
			builder.Configuration.GetSection("SallesStoreDatabase"));

			// Connexion à la base de données MongoDB en local
			var client = new MongoClient("mongodb://localhost:27017");
			var database = client.GetDatabase("nom_de_votre_base_de_donnees");
			var collection = database.GetCollection<BsonDocument>("salles");

			// Récupération de toutes les salles
			var salles = collection.Find(Builders<BsonDocument>.Filter.Empty).ToList();

			// Affichage des salles
			foreach (var salle in salles)
			{
				Console.WriteLine(salle);
			}

			// Add services to the container.

			builder.Services.AddControllers();
			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();

			var app = builder.Build();

			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseHttpsRedirection();

			app.UseAuthorization();


			app.MapControllers();

			app.Run();
		}
	}
}