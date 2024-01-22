using ApiSalleConcert.Models.Data;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ApiSalleConcert.Models.Services

{
	public class AuthService
	{
		private readonly IMongoCollection<Auth> _authCollection;

		public AuthService(IOptions<SalleDatabaseSettings> salleStoreDatabaseSettings)
		{
			var mongoClient = new MongoClient(salleStoreDatabaseSettings.Value.ConnectionString);

			var mongoDatabase = mongoClient.GetDatabase(
				salleStoreDatabaseSettings.Value.DatabaseName);

			_authCollection = mongoDatabase.GetCollection<Auth>(
				salleStoreDatabaseSettings.Value.UsersCollectionName);
		}

		public async Task<List<Auth>> GetAsync() =>
		await _authCollection.Find(_ => true).ToListAsync();

		public async Task<Auth?> GetAsync(string id) =>
			await _authCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

		public async Task CreateAsync(Auth newAuth) =>
			await _authCollection.InsertOneAsync(newAuth);

		public async Task UpdateAsync(string id, Auth updateAuth) =>
			await _authCollection.ReplaceOneAsync(x => x.Id == id, updateAuth);

		public async Task RemoveAsync(string id) =>
			await _authCollection.DeleteOneAsync(x => x.Id == id);
	}
}
