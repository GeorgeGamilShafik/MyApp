using API.Extensions;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddApplicationService(builder.Configuration);
builder.Services.AddIdentityServices(builder.Configuration);

var app = builder.Build();

app.UseCors(corsBuilder => corsBuilder.AllowAnyHeader().AllowAnyMethod().WithOrigins("http://localhost:4200"));

// the middleware should be between app.UseCors() and  app.MapControllers()
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
