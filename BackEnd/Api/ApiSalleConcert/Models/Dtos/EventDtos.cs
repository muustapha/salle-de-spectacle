namespace ApiSalleConcert.Models.Dtos
{
	public class EventDtosIn
	{
		public int IdSalle { get; set; }

		public string Artiste { get; set; }

		public int Prix { get; set; }

		public string Style { get; set; }

		public DateTime Date { get; set; }
	}
}
