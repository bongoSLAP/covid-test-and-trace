using Cases.Data;
using Cases.Interfaces;
using Cases.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Cases.Helpers;
using Cases.Hubs;

var builder = WebApplication.CreateBuilder(args);
var _policyName = "CorsPolicy";

builder.Services.AddTransient<IMongoCRUD, MongoCRUD>();
builder.Services.AddScoped<ILoginService, LoginService>();
builder.Services.AddScoped<ITestReportingService, TestReportingService>();
builder.Services.AddScoped<IVenueService, VenueService>();
builder.Services.AddScoped<IUserHelper, UserHelper>();
builder.Services.AddScoped<INotificationHub, NotificationHub>();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name: _policyName, policyBuilder =>
    {
        policyBuilder
            .WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

builder.Services.AddSignalR();
builder.Services.AddControllers();

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["Jwt:Issuer"],
            ValidAudience = builder.Configuration["Jwt:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
        };
    });

var app = builder.Build();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors(_policyName);
app.UseAuthentication();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapHub<NotificationHub>("/notifications");
});
app.MapControllers();

app.Run();