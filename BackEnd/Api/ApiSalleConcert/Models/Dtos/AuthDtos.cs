namespace ApiSalleConcert.Models.Dtos
{
	public class AuthDtosSignUp
	{
		public string Pseudo { get; set; }

		public string Mail { get; set; }

		public string Password { get; set; }

	}

	public class AuthDtosSignIn
	{
		public string Mail { get; set; }

		public string Password { get; set; }

	}
}
