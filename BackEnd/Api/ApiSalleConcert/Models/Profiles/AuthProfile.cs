using ApiSalleConcert.Models.Data;
using ApiSalleConcert.Models.Dtos;
using AutoMapper;

namespace ApiSalleConcert.Models.Profiles
{
	public class AuthProfile : Profile
	{
		public AuthProfile()
		{
			CreateMap<Auth, AuthDtosSignUp>();
			CreateMap<AuthDtosSignUp, Auth>();

			CreateMap<Auth, AuthDtosSignIn>();
			CreateMap<AuthDtosSignIn, Auth>();
		}

	}
}
