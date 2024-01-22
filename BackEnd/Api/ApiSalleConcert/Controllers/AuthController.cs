using ApiSalleConcert.Models.Data;
using ApiSalleConcert.Models.Services;
using Microsoft.AspNetCore.Mvc;
using ApiSalleConcert.Models.Tools;
using ApiSalleConcert.Models.Dtos;
using ApiSalleConcert.Models;
using AutoMapper;

namespace ApiSalleConcert.Controllers
{

	[ApiController]
	[Route("api/[controller]")]
	public class AuthController : ControllerBase
	{
		private readonly AuthService _authService;
		private readonly IMapper _mapper;

		public AuthController(AuthService authService, IMapper mapper)
		{
			_authService = authService;
			_mapper = mapper;
		}

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
		public async Task<IActionResult> createUser(AuthDtosIn newAuth)
		{
			// Avant findByMail pour vérifier si mail unique
			if (await _authService.GetAsyncMail(newAuth.Mail) == null)
			{
				Auth user = _mapper.Map<Auth>(newAuth);

				// Hash du password
				string hashPassword = Security.Hash(newAuth.Password);

				// On reforme l'auth avec le password hash
				user.Password = hashPassword;

				// On ajout en BDD
				await _authService.CreateAsync(user);

				return CreatedAtAction(nameof(Get), new { id = user.Id }, user);
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

			string hashPassword = Security.Hash(updateAuth.Password);

			// On reforme l'auth avec le password hash
			updateAuth.Password = hashPassword;

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
