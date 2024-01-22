namespace ApiSalleConcert.Models.Data
{
	public class SalleDatabaseSettings
	{
		public string ConnectionString { get; set; } = null!;
		public string DatabaseName { get; set; } = null!;
		public string SallesCollectionName { get; set; } = null!;
		public string UsersCollectionName { get; set; } = null!;
	}
}
