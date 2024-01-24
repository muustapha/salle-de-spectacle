using ApiSalleConcert.Models.Dtos;
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
	public class StyleController : ControllerBase
	{

		private readonly StyleService _styleService;

		public StyleController(StyleService styleService)
		{
			_styleService = styleService;
		}


        [AllowAnonymous]
        [HttpGet]
		public async Task<List<Style>> Get()
		{
			var listStyles = await _styleService.GetAsync();
			return listStyles;
		}
	}
}
