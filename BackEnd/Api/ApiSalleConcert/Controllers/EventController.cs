﻿using ApiSalleConcert.Models.Dtos;
using ApiSalleConcert.Models.Services;
using Microsoft.AspNetCore.Mvc;
using ApiSalleConcert.Models.Data;
using AutoMapper;
using ApiSalleConcert.Models;
using Microsoft.AspNetCore.Authorization;

namespace ApiSalleConcert.Controllers
{

	[ApiController]
	[Route("api/[controller]")]
	public class EventController : ControllerBase
	{

		private readonly EventService _eventService;
		private readonly IMapper _mapper;

		public EventController(EventService eventService, IMapper mapper)
		{
			_eventService = eventService;
			_mapper = mapper;
		}


        [AllowAnonymous]
        [HttpGet]
		public async Task<List<Event>> Get()
		{
			var listEvents = await _eventService.GetAsync();
			return listEvents;
		}


        [AllowAnonymous]
        [HttpGet("{id:length(24)}")]
		public async Task<ActionResult<Event>> Get(string id)
		{
			var e = await _eventService.GetAsync(id);

			if (e is null)
			{
				return NotFound();
			}

			return e;
		}

		[Authorize]
		[HttpPost]
		public async Task<IActionResult> Post(EventDtosIn newEvent)
		{
			var re = Request;
			var headers = re.Headers;

			Event e = _mapper.Map<Event>(newEvent);

			await _eventService.CreateAsync(e);

			return CreatedAtAction(nameof(Get), new { id = e.Id }, e);
		}

        [Authorize]
        [HttpPut("{id:length(24)}")]
		public async Task<IActionResult> Update(string id, Event updatedEvent)
		{
			var e = await _eventService.GetAsync(id);

			if (e is null)
			{
				return NotFound();
			}

			updatedEvent.Id = e.Id;

			await _eventService.UpdateAsync(id, updatedEvent);

			return NoContent();
		}

        [Authorize]
        [HttpDelete("{id:length(24)}")]
		public async Task<IActionResult> Delete(string id)
		{
			var e = await _eventService.GetAsync(id);

			if (e is null)
			{
				return NotFound();
			}

			await _eventService.RemoveAsync(id);

			return NoContent();
		}
	}
}
