using Microsoft.AspNetCore.Mvc;
using ApiSalleConcert.Models;
using ApiSalleConcert.Models.Services;

namespace ApiSalleConcert.Controllers
{
	[ApiController]
	[Route("api/[controller]")]

	public class SallesController : ControllerBase
	{
		private readonly SallesService _sallesService;

		public SallesController(SallesService sallesService) =>
			_sallesService = sallesService;

		[HttpGet]
		public async Task<List<Salle>> Get() =>
			await _sallesService.GetAsync();

		[HttpGet("{id:length(24)}")]
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

		[HttpPut("{id:length(24)}")]
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

		[HttpDelete("{id:length(24)}")]
		public async Task<IActionResult> Delete(int id)
		{
			var book = await _sallesService.GetAsync(id);

			if (book is null)
			{
				return NotFound();
			}

			await _sallesService.RemoveAsync(id);

			return NoContent();
		}
	}
}
