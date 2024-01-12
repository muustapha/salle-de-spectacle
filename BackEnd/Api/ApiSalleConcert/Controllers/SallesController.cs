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
			var salle = await _sallesService.GetAsync(id);

			if (salle is null)
			{
				return NotFound();
			}

			return salle;
		}

        [HttpGet("GetAllResearched")]
        public async Task<List<SalleRecherche>> GetAllResearched(string nomRecherche = "", string villeRecherchee = "", string styleRecherche = "")
        {
            List<Salle> listeSalle = await _sallesService.GetAsync();

            if (listeSalle == null || listeSalle.Count == 0 || (nomRecherche == "" && villeRecherchee == "" && styleRecherche == ""))
                return _mapper.Map<List<SalleRecherche>>(listeSalle);

            List<Salle> sallesRecherchees = new();

            if (nomRecherche != "")
            {
                nomRecherche = nomRecherche.ToLower();

                for (int i = 0; i < listeSalle.Count; i++)
                {
                    if (!listeSalle[i].IsDelete && listeSalle[i].Nom != null && listeSalle[i].Nom!.ToLower().StartsWith(nomRecherche))
                        sallesRecherchees.Add(listeSalle[i]);
                }

                listeSalle = sallesRecherchees;
            }

            if (villeRecherchee != "")
            {
                sallesRecherchees = new();

                for (int i = 0; i < listeSalle.Count; i++)
                {
                    if (!listeSalle[i].IsDelete && listeSalle[i].AdresseSalle!.Ville != null && listeSalle[i].AdresseSalle!.Ville!.ToLower().StartsWith(villeRecherchee))
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
                            if (!listeSalle[i].IsDelete && style.ToLower().StartsWith(styleRecherche))
                                sallesRecherchees.Add(listeSalle[i]);
                        }
                }
            }

            return _mapper.Map<List<SalleRecherche>>(sallesRecherchees);
        }



        [HttpGet("nomRecherche")]
        public async Task<List<SalleRecherche>> GetAllByNom(string nomRecherche)
		{
            List<Salle> listeSalle = await _sallesService.GetAsync();

            if (listeSalle == null || listeSalle.Count == 0)
                return _mapper.Map<List<SalleRecherche>>(listeSalle);

            List<Salle> sallesRecherchees = new();

            nomRecherche = nomRecherche.ToLower();

            for (int i = 0; i < listeSalle.Count; i++)
            {
                if (!listeSalle[i].IsDelete && listeSalle[i].Nom != null && listeSalle[i].Nom!.ToLower().StartsWith(nomRecherche))
                    sallesRecherchees.Add(listeSalle[i]);
            }

            return _mapper.Map<List<SalleRecherche>>(sallesRecherchees);
        }

        [HttpGet("villeRecherchee")]
        public async Task<List<SalleRecherche>> GetAllByVille(string villeRecherche)
		{
            List<Salle> listeSalle = await _sallesService.GetAsync();

            if (listeSalle == null || listeSalle.Count == 0)
                return _mapper.Map<List<SalleRecherche>>(listeSalle);

            List<Salle> sallesRecherchees = new();

            villeRecherche = villeRecherche.ToLower();

            for (int i = 0; i < listeSalle.Count; i++)
            {
                if (!listeSalle[i].IsDelete && listeSalle[i].AdresseSalle!.Ville != null && listeSalle[i].AdresseSalle!.Ville!.ToLower().StartsWith(villeRecherche))
                    sallesRecherchees.Add(listeSalle[i]);
            }

            return _mapper.Map<List<SalleRecherche>>(sallesRecherchees);
        }

		[HttpGet("styleRecherche")]
		public async Task<List<SalleRecherche>> GetAllByStyles(string styleRecherche)
		{
            List<Salle> listeSalle = await _sallesService.GetAsync();

            if (listeSalle == null || listeSalle.Count == 0)
                return _mapper.Map<List<SalleRecherche>>(listeSalle);

            List<Salle> sallesRecherchees = new();

            styleRecherche = styleRecherche.ToLower();

            for (int i = 0; i < listeSalle.Count; i++)
            {
				if (listeSalle[i].Styles != null && listeSalle[i].Styles!.Count > 0)
                foreach (string style in listeSalle[i].Styles!)
                {
                    if (!listeSalle[i].IsDelete && style.ToLower().StartsWith(styleRecherche))
                        sallesRecherchees.Add(listeSalle[i]);
                }
            }

            return _mapper.Map<List<SalleRecherche>>(sallesRecherchees);
        }

		[HttpPost]
		public async Task<IActionResult> Post(Salle newSalles)
		{
			await _sallesService.CreateAsync(newSalles);

			return CreatedAtAction(nameof(Get), new { id = newSalles.Id }, newSalles);
		}

		[HttpPut("{id}/{no}")]
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
