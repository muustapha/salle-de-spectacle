using Microsoft.AspNetCore.Mvc;
using ApiSalleConcert.Models;
using ApiSalleConcert.Models.Dtos;
using ApiSalleConcert.Models.Services;
using AutoMapper;

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

		[HttpGet]
		public async Task<List<SalleRecherche>> Get()
		{
			var listeSalle = await _sallesService.GetAsync();
            return _mapper.Map<List<SalleRecherche>>(listeSalle);
		}

        [HttpGet("id")]
		public async Task<ActionResult<Salle>> Get(int id)
		{
			var book = await _sallesService.GetAsync(id);

			if (book is null)
			{
				return NotFound();
			}

			return book;
		}

		[HttpPost]
		public async Task<IActionResult> Post(Salle newSalles)
		{
			await _sallesService.CreateAsync(newSalles);

			return CreatedAtAction(nameof(Get), new { id = newSalles.Id }, newSalles);
		}

		[HttpPut("id")]
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
