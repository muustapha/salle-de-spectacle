using System.Security.Cryptography;
using System.Security.Policy;
using System.Text;

namespace ApiSalleConcert.Models.Tools
{
	public abstract class Security
	{
		private const int SaltSize = 16;

		private const int HashSize = 20;

		// Methode pour hash le password
		private static string HashPassword(string password, byte[] salt,int iterations)
		{	
			// Création du hashage
			var key = new Rfc2898DeriveBytes(password, salt, iterations);
			var hash = key.GetBytes(HashSize);

			// Combien salt and hash
			var hashBytes = new byte[SaltSize + HashSize];
			Array.Copy(salt, 0, hashBytes, 0, SaltSize);
			Array.Copy(hash, 0, hashBytes, SaltSize, HashSize);

			// Convert TO base64
			var base64Hash = Convert.ToBase64String(hashBytes);

			return base64Hash;
		}

		// Methode qui retourne le password hash
		public static string Hash(string password)
		{
			byte[] salt;
			new RNGCryptoServiceProvider().GetBytes(salt = new byte[SaltSize]);

			return HashPassword(password, salt,SaltSize);
		}

		// Methode pour vérifier que le password
		public static bool CompareHash(string password, string hash)
		{
			// Convertir le hash stocké en bytes
			byte[] storedHashBytes = Convert.FromBase64String(hash);

			// Extraire le sel du hash stocké
			byte[] salt = new byte[SaltSize];
			Array.Copy(storedHashBytes, 0, salt, 0, SaltSize);

			// Utiliser le sel stocké pour recalculer le hash du mot de passe fourni
			string newHash = HashPassword(password, salt, SaltSize);
			byte[] newHashBytes = Convert.FromBase64String(newHash);


			// Comparer les deux hashes
			bool equal = storedHashBytes.SequenceEqual(newHashBytes);

			return equal;
		}

	}
}
