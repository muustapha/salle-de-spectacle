using ApiSalleConcert.Models.Data;
using ApiSalleConcert.Models.Services;
using Microsoft.AspNetCore.Mvc;
using ApiSalleConcert.Models.Tools;
using ApiSalleConcert.Models.Dtos;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;

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

		[HttpPost("SignUp")]
		public async Task<IActionResult> SignUp(AuthDtosSignUp newAuth)
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

		[AllowAnonymous]
		[HttpPost("SignIn")]
		public async Task<IActionResult> SignIn([FromBody] AuthDtosSignIn user)
		{
			Auth u = await _authService.GetAsyncMail(user.Mail);

			if (u != null && Security.CompareHash(user.Password, u.Password))
			{
				var token = _authService.Authenticate(user);

				if (token == null)
				{
					return Unauthorized();
				}

				return Ok(new { token, u.IsAdmin });
			}
			return BadRequest();
		}

	}
}
