using API.Data;
using API.Interfaces;
using API.services;
using Microsoft.EntityFrameworkCore;

namespace API.Extensions
{
    public static  class ApplicationServiceExtensions
    {
        public static IServiceCollection AddApplicationService(this IServiceCollection service, IConfiguration config)
        {
            service.AddDbContext<DataContext>(options =>
            {
                options.UseSqlite(config.GetConnectionString("DefaultConnection"));
            });
            service.AddCors();
            service.AddScoped<ITokenService, TokenService>();

            return service;
        }       
    }
}