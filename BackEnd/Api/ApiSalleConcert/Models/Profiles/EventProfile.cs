using ApiSalleConcert.Models.Data;
using ApiSalleConcert.Models.Dtos;
using AutoMapper;

namespace ApiSalleConcert.Models.Profiles
{
	public class EventProfile : Profile
	{
		public EventProfile()
		{
			CreateMap<Event, EventDtosIn>();
			CreateMap<EventDtosIn, Event>();
		}
	}
}
