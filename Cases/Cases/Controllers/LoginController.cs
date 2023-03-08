using Cases.Interfaces;
using Cases.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cases.Controllers
{
    public class LoginController : Controller
    {
        private readonly ILoginService _loginService;

        public LoginController(ILoginService loginHelper)
        {
            _loginService = loginHelper;
        }

        [AllowAnonymous]
        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] UserLogin userLogin)
        {
            try
            {
                var user = await _loginService.Authenticate(userLogin);
                if (user != null)
                {
                    var token = _loginService.Generate(user);
                    return Ok(token);
                }

                return BadRequest("User not found");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}