using Cases.Interfaces;
using Cases.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using Scrypt;

namespace Cases.Controllers
{
    public class SignupController : Controller
    {
        private readonly IMongoCRUD _db;
        private readonly IUserHelper _userHelper;

        public SignupController(IMongoCRUD db, IUserHelper userHelper)
        {
            _db = db;
            _userHelper = userHelper;
        }

        [HttpPost("Signup")]
        public IActionResult Create([FromBody] User user)
        {
            if (user == null)
                return BadRequest("User is null");
            
            if (_userHelper.GetUserByUsername(user.Username) != null)
                return BadRequest("User already exists");

            try
            {
                ScryptEncoder encoder = new ScryptEncoder();
                string hashedPassword = encoder.Encode(user.Password);

                Guid guid = Guid.NewGuid();
                User newUser = new(
                    guid.ToString(),
                    user.FirstName,
                    user.LastName,
                    user.NhsNumber,
                    user.Username.ToLower(),
                    hashedPassword,
                    user.Email,
                    user.Telephone,
                    user.Postcode,
                    null,
                    null,
                    null,
                    0,
                    "open"
                );

                _db.InsertRecord<User>("users", newUser);

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        
        /*
        [HttpGet("/User/PopulateUsers")]
        public IActionResult Foo()
        {
            var dummy = new DummyDataHelper(_db);
            var users = dummy.GetDummyUsers();
            
            ScryptEncoder encoder = new ScryptEncoder();
            
            foreach (User user in users)
            {
                string hashedPassword = encoder.Encode(user.Password);

                Guid guid = Guid.NewGuid();
                User newUser = new(
                    guid.ToString(),
                    user.FirstName,
                    user.LastName,
                    user.NhsNumber,
                    user.Username.ToLower(),
                    hashedPassword,
                    user.Email,
                    user.Telephone,
                    user.Postcode,
                    user.LastInfected,
                    user.LastTested,
                    user.LastContacted,
                    0,
                    "open"
                );
                
                _db.InsertRecord("users", newUser);
            }

            return Ok();
        }
        */
    }
}