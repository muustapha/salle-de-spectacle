using System.Security.Cryptography;

namespace ApiSalleConcert.Models.Tools
{
	public abstract class Security
	{
		private const int SaltSize = 16;

		private const int HashSize = 20;

		// Methode pour hash le password
		private static string HashPassword(string password, int iterations)
		{
			// Création du salage pour le password
			byte[] salt;
			new RNGCryptoServiceProvider().GetBytes(salt = new byte[SaltSize]);

			// Création du hashage
			var key = new Rfc2898DeriveBytes(password, salt, iterations);
			var hash = key.GetBytes(HashSize);

			// Combien salt and hash
			var hashBytes = new byte[SaltSize + HashSize];
			Array.Copy(salt, 0, hashBytes, 0, SaltSize);
			Array.Copy(hash, 0, hashBytes, SaltSize, HashSize);

			// Convert TO base64
			var base64Hash = Convert.ToBase64String(hashBytes);

			return string.Format("$MYHASH$V1${0}${1}", iterations, base64Hash);
		}

		// Methode qui retourne le password hash
		public static string Hash(string password)
		{
			return HashPassword(password, SaltSize);
		}

		// Methode pour vérifier que l'adresse mail est unique

	}
}
