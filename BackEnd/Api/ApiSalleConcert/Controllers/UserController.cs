using ApiSalleConcert.Models.Data;
using ApiSalleConcert.Models.Services;
using ApiSalleConcert.Models.Tools;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace ApiSalleConcert.Controllers
{
	public class UserController : ControllerBase
	{
		private readonly AuthService _authService;
		private readonly IMapper _mapper;

		public UserController(AuthService authService, IMapper mapper)
		{
			_authService = authService;
			_mapper = mapper;
		}

        [Authorize]
        [HttpGet]
		public async Task<List<Auth>> Get() =>
		await _authService.GetAsync();

        [Authorize]
        [HttpGet("{id:length(24)}")]
		public async Task<ActionResult<Auth>> Get(string id)
		{
			var user = await _authService.GetAsync(id);

			if (user is null)
			{
				return NotFound();
			}

			return user;
		}

        [Authorize]
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

        [Authorize]
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
