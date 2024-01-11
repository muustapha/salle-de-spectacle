
using ApiSalleConcert.Models.Data;
using ApiSalleConcert.Models.Services;

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
			// Add services to the container.
<<<<<<< HEAD

			var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

			builder.Services.AddCors(options =>
			{
				options.AddPolicy(name: MyAllowSpecificOrigins,policy => { policy.WithOrigins("*");});
			});


=======
			builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
>>>>>>> 897d9b95c497fbe76752dc2fe53cc8b7f7b60aaf
			builder.Services.AddControllers();
			// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
			builder.Services.AddEndpointsApiExplorer();
			builder.Services.AddSwaggerGen();

			var app = builder.Build();

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