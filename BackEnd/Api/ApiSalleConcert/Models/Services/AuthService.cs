using ApiSalleConcert.Models.Data;
using ApiSalleConcert.Models.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using MongoDB.Driver;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ApiSalleConcert.Models.Services

{
	public class AuthService
	{
		private readonly IMongoCollection<Auth> _authCollection;
		private readonly string key = "eO5wRvXmynTMVdxXjZVmOAmX2wgoxMmieDvEIomx";
		private readonly IMapper _mapper;

		public AuthService(IOptions<SalleDatabaseSettings> salleStoreDatabaseSettings, IMapper mapper)
		{
			_mapper = mapper;
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

		public async Task<Auth?> GetAsyncMail(string mail) =>
			await _authCollection.Find(x => x.Mail == mail).FirstOrDefaultAsync();

		public async Task CreateAsync(Auth newAuth) =>
			await _authCollection.InsertOneAsync(newAuth);

		public async Task UpdateAsync(string id, Auth updateAuth) =>
			await _authCollection.ReplaceOneAsync(x => x.Id == id, updateAuth);

		public async Task RemoveAsync(string id) =>
			await _authCollection.DeleteOneAsync(x => x.Id == id);

		public string Authenticate(AuthDtosSignIn u)
		{
			Auth user = _mapper.Map<Auth>(u);

			var tokenHandler = new JwtSecurityTokenHandler();
			var tokenKey = Encoding.ASCII.GetBytes(key);
			var tokenDescription = new SecurityTokenDescriptor()
			{
				Subject = new ClaimsIdentity(new Claim[]
				{
						new Claim(ClaimTypes.Email, user.Mail),
						new Claim(ClaimTypes.Role, user.IsAdmin.ToString()),
				}),

				Expires = DateTime.UtcNow.AddHours(1),

				SigningCredentials = new SigningCredentials(
					new SymmetricSecurityKey(tokenKey),
					SecurityAlgorithms.HmacSha256Signature
					)
			};

			var token = tokenHandler.CreateToken(tokenDescription);
			return tokenHandler.WriteToken(token);
		}
	}
}
