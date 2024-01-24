
using ApiSalleConcert.Models.Data;
using ApiSalleConcert.Models.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace ApiSalleConcert
{
	public class Program
	{
		public static void Main(string[] args)
		{
			var builder = WebApplication.CreateBuilder(args);

			builder.Services.Configure<SalleDatabaseSettings>(
			builder.Configuration.GetSection("SallesStoreDatabase"));
			builder.Services.AddSingleton<SallesService>();
			builder.Services.AddSingleton<AuthService>();
			builder.Services.AddSingleton<EventService>();
			// Add services to the container.

			var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

			builder.Services.AddCors(options =>
			{
				options.AddPolicy(name: MyAllowSpecificOrigins, policy =>
				{
					policy
					.WithOrigins("*") // Remplacez avec l'origine réelle de votre frontend
					.AllowAnyMethod() // Ou spécifiez explicitement les méthodes que vous autorisez, par exemple, .WithMethods("GET", "POST", "PUT", "DELETE")
					.AllowAnyHeader();
				});
			});


			builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
			builder.Services.AddControllers();
			builder.Services.AddAuthentication(x =>
			{
				x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
			})
			.AddJwtBearer(x =>
			{
				x.RequireHttpsMetadata = false;
				x.SaveToken = true;
				x.TokenValidationParameters = new TokenValidationParameters
				{
					ValidateIssuerSigningKey = true,
					IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(builder.Configuration.GetSection("JwtKey").ToString()!)),
					ValidateIssuer = true,
					ValidateAudience = false,
				};
			}
			);
			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();

			var app = builder.Build();

			app.UseAuthentication();

			app.UseCors(MyAllowSpecificOrigins);
			// Configure the HTTP request pipeline.
			if (app.Environment.IsDevelopment())
			{
				app.UseSwagger();
				app.UseSwaggerUI();
			}

			app.UseHttpsRedirection();

			app.UseAuthorization();


			app.MapControllers();

			app.Run();
		}
	}
}