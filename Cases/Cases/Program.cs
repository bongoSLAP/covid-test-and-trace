using Cases.Data;
using Cases.Interfaces;
using Cases.Services;
using Cases.Hubs;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using Cases.Helpers;

var builder = WebApplication.CreateBuilder(args);
var _policyName = "CorsPolicy";

builder.Services.AddTransient<IMongoCRUD, MongoCRUD>();

builder.Services.AddScoped<ILoginService, LoginService>();
builder.Services.AddScoped<ITestReportingService, TestReportingService>();
builder.Services.AddScoped<IVenueService, VenueService>();
builder.Services.AddScoped<IPostcodeService, PostcodeService>();
builder.Services.AddScoped<IUserHelper, UserHelper>();

builder.Services.AddSingleton<INotificationHub, NotificationHub>();

builder.Services.AddCors(opt =>
{
    opt.AddPolicy(name: _policyName, policyBuilder =>
    {
        policyBuilder
            .WithOrigins("http://localhost:3000")
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials(); 
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
var hub = app.Services.GetService<INotificationHub>();

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors(_policyName);
app.UseAuthentication();
app.UseAuthorization();
app.UseEndpoints(endpoints =>
{
    endpoints.MapHub<NotificationHub>("/notifications").RequireCors(_policyName);
});
app.MapControllers();

app.Run();