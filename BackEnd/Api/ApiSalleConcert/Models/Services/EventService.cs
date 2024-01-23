using ApiSalleConcert.Models.Data;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ApiSalleConcert.Models.Services
{
	public class EventService
	{
		private readonly IMongoCollection<Event> _eventCollection;

		public EventService(
			IOptions<SalleDatabaseSettings> salleStoreDatabaseSettings)
		{
			var mongoClient = new MongoClient(
				salleStoreDatabaseSettings.Value.ConnectionString);

			var mongoDatabase = mongoClient.GetDatabase(
				salleStoreDatabaseSettings.Value.DatabaseName);

			_eventCollection = mongoDatabase.GetCollection<Event>(
				salleStoreDatabaseSettings.Value.EventsCollectionName);
		}

		public async Task<List<Event>> GetAsync() =>
			await _eventCollection.Find(_ => true).ToListAsync();

		public async Task<Event?> GetAsync(string id) =>
			await _eventCollection.Find(x => x.Id == id).FirstOrDefaultAsync();

		public async Task CreateAsync(Event newEvent) =>
			await _eventCollection.InsertOneAsync(newEvent);

		public async Task UpdateAsync(string id, Event updateEvent) =>
			await _eventCollection.ReplaceOneAsync(x => x.Id == id, updateEvent);

		public async Task RemoveAsync(string id) =>
			await _eventCollection.DeleteOneAsync(x => x.Id == id);
	}
}
