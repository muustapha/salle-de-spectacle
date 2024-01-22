using ApiSalleConcert.Models.Data;
using ApiSalleConcert.Models.Services;
using Microsoft.AspNetCore.Mvc;
using ApiSalleConcert.Models.Tools;
using ApiSalleConcert.Models.Dtos;
using ApiSalleConcert.Models;

namespace ApiSalleConcert.Controllers
{

	[ApiController]
	[Route("api/[controller]")]
	public class AuthController : ControllerBase
	{
		private readonly AuthService _authService;

		private const int SalteSize = 32;

		public AuthController(AuthService authService) => _authService = authService;

		[HttpGet]
		public async Task<List<Auth>> Get() =>
		await _authService.GetAsync();

		[HttpGet("{id:length(24)}")]
		public async Task<ActionResult<Auth>> Get(string id)
		{
			var book = await _authService.GetAsync(id);

			if (book is null)
			{
				return NotFound();
			}

			return book;
		}


		[HttpPost("createUser")]
		public async Task<IActionResult> createUser(Auth newAuth)
		{
			// Avant findByMail pour vérifier si mail unique
			if (await _authService.GetAsyncMail(newAuth.Mail) == null)
			{
				// Hash du password
				string hashPassword = Security.Hash(newAuth.Password);

				// On reforme l'auth avec le password hash
				Auth hashAuth = new Auth(newAuth.Pseudo, newAuth.Mail, hashPassword, newAuth.IsAdmin);

				// On ajout en BDD
				await _authService.CreateAsync(hashAuth);

				return CreatedAtAction(nameof(Get), new { id = hashAuth.Id }, hashAuth);
			}
			else
			{
				return BadRequest();
			}
		}

		[HttpPut("{id:length(24)}")]
		public async Task<IActionResult> Update(string id, Auth updateAuth)
		{
			var auth = await _authService.GetAsync(id);

			if (auth is null)
			{
				return NotFound();
			}

			updateAuth.Id = auth.Id;

			await _authService.UpdateAsync(id, updateAuth);

			return NoContent();
		}

		[HttpDelete("{id:length(24)}")]
		public async Task<IActionResult> Delete(string id)
		{
			var auth = await _authService.GetAsync(id);

			if (auth is null)
			{
				return NotFound();
			}

			await _authService.RemoveAsync(id);

			return NoContent();
		}

	}
}
