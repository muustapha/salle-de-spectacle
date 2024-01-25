﻿using Microsoft.AspNetCore.Mvc;
using ApiSalleConcert.Models;
using ApiSalleConcert.Models.Dtos;
using ApiSalleConcert.Models.Services;
using AutoMapper;
using ApiSalleConcert.Models.Data;
using Microsoft.AspNetCore.Authorization;
using System.Security.Claims;

namespace ApiSalleConcert.Controllers
{
	[ApiController]
	[Route("api/[controller]")]

	public class SallesController : ControllerBase
	{
		private readonly SallesService _sallesService;
		private readonly IMapper _mapper;

		public SallesController(SallesService sallesService, IMapper mapper)
		{
			_sallesService = sallesService;
			_mapper = mapper;
		}

		[HttpGet, Authorize]
		public async Task<List<SalleRecherche>> Get()
		{
			var principal = HttpContext.User as ClaimsPrincipal;
			var role = principal.FindFirst(ClaimTypes.Role)?.Value;

			var listeSalle = await _sallesService.GetAsync();
			return _mapper.Map<List<SalleRecherche>>(listeSalle);
		}

		[AllowAnonymous]
		[HttpGet("GetAllNotDelete")]
		public async Task<List<SalleRecherche>> GetAllNotDelete()
		{
			List<Salle> listeSalle = await _sallesService.GetAsync();

			if (listeSalle == null || listeSalle.Count == 0)
				return _mapper.Map<List<SalleRecherche>>(listeSalle);

			List<Salle> sallesActive = new();

			for (int i = 0; i < listeSalle.Count; i++)
			{
				if (!listeSalle[i].IsDelete)
					sallesActive.Add(listeSalle[i]);
			}

			return _mapper.Map<List<SalleRecherche>>(sallesActive);
		}

		[AllowAnonymous]
		[HttpGet("id")]
		public async Task<ActionResult<Salle>> Get(int id)
		{
			var salle = await _sallesService.GetAsync(id);

			if (salle is null)
			{
				return NotFound();
			}

			return salle;
		}
		[AllowAnonymous]
		[HttpGet("GetAllResearched")]
		public async Task<List<SalleRecherche>> GetAllResearched(string nomRecherche = "", string villeRecherchee = "", string styleRecherche = "")
		{
			List<SalleRecherche> listeSalle = await GetAllNotDelete();

			if (listeSalle == null || listeSalle.Count == 0 || (nomRecherche == "" && villeRecherchee == "" && styleRecherche == ""))
				return _mapper.Map<List<SalleRecherche>>(listeSalle);

			List<SalleRecherche> sallesRecherchees = new();

			if (nomRecherche != "")
			{
				nomRecherche = nomRecherche.ToLower();

				for (int i = 0; i < listeSalle.Count; i++)
				{
					if (listeSalle[i].Nom != null && listeSalle[i].Nom!.ToLower().StartsWith(nomRecherche))
						sallesRecherchees.Add(listeSalle[i]);
				}

				listeSalle = sallesRecherchees;
			}

			if (villeRecherchee != "")
			{
				sallesRecherchees = new();

				for (int i = 0; i < listeSalle.Count; i++)
				{
					if (listeSalle[i].Ville != null && listeSalle[i].Ville!.ToLower().StartsWith(villeRecherchee))
						sallesRecherchees.Add(listeSalle[i]);
				}

				listeSalle = sallesRecherchees;
			}

			if (styleRecherche != "")
			{
				sallesRecherchees = new();

				for (int i = 0; i < listeSalle.Count; i++)
				{
					if (listeSalle[i].Styles != null && listeSalle[i].Styles!.Count > 0)
						foreach (string style in listeSalle[i].Styles!)
						{
							if (style.ToLower().StartsWith(styleRecherche))
								sallesRecherchees.Add(listeSalle[i]);
						}
				}
			}

			return _mapper.Map<List<SalleRecherche>>(sallesRecherchees);
		}


		[Authorize]
		[HttpPost]
		public async Task<IActionResult> Post(SalleDtoIn newSalles)
		{
			Salle s = _mapper.Map<Salle>(newSalles);

			await _sallesService.CreateAsync(s);

			return CreatedAtAction(nameof(Get), new { id = s.Id }, s);
		}

		[Authorize]
		[HttpPut("{id}")]
		public async Task<IActionResult> Update(int id, Salle updatedSalle)
		{
			var book = await _sallesService.GetAsync(id);

			if (book is null)
			{
				return NotFound();
			}

			updatedSalle.Id = book.Id;

			await _sallesService.UpdateAsync(id, updatedSalle);

			return NoContent();
		}

		[Authorize]
		[HttpDelete("id")]
		public async Task<IActionResult> Delete(int id)
		{
			var salle = await _sallesService.GetAsync(id);

			if (salle is null)
			{
				return NotFound();
			}

			Salle deletedSalle = salle;
			deletedSalle.Supprimer();

			await _sallesService.UpdateAsync(id, deletedSalle);

			return NoContent();
		}


		//[HttpDelete("id")]
		//public async Task<IActionResult> Delete(int id)
		//{
		//	var book = await _sallesService.GetAsync(id);

		//	if (book is null)
		//	{
		//		return NotFound();
		//	}

		//	await _sallesService.RemoveAsync(id);

		//	return NoContent();
		//}
	}
}
