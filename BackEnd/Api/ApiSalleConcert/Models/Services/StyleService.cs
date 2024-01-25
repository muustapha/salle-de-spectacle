using ApiSalleConcert.Models.Data;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ApiSalleConcert.Models.Services
{
	public class StyleService
	{
		private readonly IMongoCollection<Style> _styleCollection;

		public StyleService(
			IOptions<SalleDatabaseSettings> salleStoreDatabaseSettings)
		{
			var mongoClient = new MongoClient(
				salleStoreDatabaseSettings.Value.ConnectionString);

			var mongoDatabase = mongoClient.GetDatabase(
				salleStoreDatabaseSettings.Value.DatabaseName);

            _styleCollection = mongoDatabase.GetCollection<Style>(
				salleStoreDatabaseSettings.Value.StylesCollectionName);
		}

		public async Task<List<Style>> GetAsync() =>
			await _styleCollection.Find(_ => true).ToListAsync();
	}
}
