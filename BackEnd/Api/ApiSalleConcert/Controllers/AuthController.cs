using ApiSalleConcert.Models.Data;
using ApiSalleConcert.Models.Services;
using Microsoft.AspNetCore.Mvc;
using ApiSalleConcert.Models.Tools;
using ApiSalleConcert.Models.Dtos;
using ApiSalleConcert.Models;
using AutoMapper;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using static System.Net.Mime.MediaTypeNames;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;

namespace ApiSalleConcert.Controllers
{

	[ApiController]
	[Route("api/[controller]")]
	public class AuthController : ControllerBase
	{
		private readonly AuthService _authService;
		private readonly IMapper _mapper;
		private readonly string key = "test";
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

		[HttpPost("SignIn")]
		public async Task<string> SignIn(AuthDtosSignIn user)
		{
			Auth u = await _authService.GetAsyncMail(user.Mail);

			if (u != null && Security.CompareHash(user.Password, u.Password))
			{
				var tokenHandler = new JwtSecurityTokenHandler();
				var tokenKey = Encoding.ASCII.GetBytes(key);
				var tokenDescription = new SecurityTokenDescriptor()
				{
					Subject = new ClaimsIdentity(new Claim[]
					{
						new Claim(ClaimTypes.Email, user.Mail),
					}),

					Expires = DateTime.UtcNow.AddHours(1),

					SigningCredentials = new SigningCredentials(
						new SymmetricSecurityKey(tokenKey),
						SecurityAlgorithms.HmacSha256Signature
						)
				};

				var token = tokenHandler.CreateToken(tokenDescription);

				return tokenHandler.WriteToken(token);
			}
			else
			{
				return null;
			}
		}

	}
}
