using AutoMapper;
using ApiSalleConcert.Models.Dtos;

namespace ApiSalleConcert.Models.Profiles
{
    public class SallesProfile : Profile
    {
        public SallesProfile() 
        {
            CreateMap<Salle, SalleRecherche>().ForMember(dest => dest.Ville, opts => opts.MapFrom(src => src.AdresseSalle!.Ville));
        }
    }
}
