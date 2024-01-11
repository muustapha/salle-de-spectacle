using MongoDB.Bson.Serialization.Attributes;

namespace ApiSalleConcert.Models.Dtos
{
    public class SalleRecherche
    {
        public int Id { get; set; }

        public string Nom { get; set; } = null!;

        public string Ville { get; set; } = null!;

        public List<string>? Styles { get; set; } = null!;

        public int? Capacite { get; set; }
    }
}
