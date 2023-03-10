using Cases.Interfaces;
using Cases.Models;
using Cases.Models.Entities;
using Microsoft.IdentityModel.Tokens;
using Scrypt;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Cases.Services
{
    public class LoginService : ILoginService
    {
        private readonly IConfiguration _config;
        private readonly IUserHelper _userHelper;

        public LoginService(IConfiguration config, IUserHelper userHelper)
        {
            _config = config;
            _userHelper = userHelper;
        }

        public string Generate(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Username),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.GivenName, user.FirstName),
            };

            var token = new JwtSecurityToken(
                _config["Jwt:Issuer"],
                _config["Jwt:Audience"],
                claims,
                expires: DateTime.UtcNow.AddMinutes(15),
                signingCredentials: credentials
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public async Task<User>? Authenticate(UserLogin userLogin)
        {
            ScryptEncoder encoder = new ScryptEncoder();
            var currentUser = await _userHelper.GetUserByUsername(userLogin.Username);
            
            bool isPasswordMatch = encoder.Compare(userLogin.Password, currentUser.Password);

            if (isPasswordMatch)
                return currentUser;

            return null;
        }
    }
}
