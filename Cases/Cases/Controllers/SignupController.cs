using Cases.Interfaces;
using Cases.Models.Entities;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Driver;
using Scrypt;

namespace AssetBlox.Controllers
{
    public class SignupController : Controller
    {
        private readonly IMongoCRUD _db;

        public SignupController(IMongoCRUD db)
        {
            _db = db;
        }

        [HttpPost("Signup")]
        public IActionResult Create([FromBody] User user)
        {
            if (user == null)
                return BadRequest("User is null");


            ScryptEncoder encoder = new ScryptEncoder();

            try
            {
                var filter = Builders<User>.Filter.Eq("_username", user.Username.ToLower()); //make username creation toLower also
                User? checkExists = _db.LoadFirstRecordByFilter<User>("users", filter);

                if (checkExists != null)
                {
                    return BadRequest("User already exists");
                }

                string hashedPassword = encoder.Encode(user.Password);

                Guid guid = Guid.NewGuid();
                User newUser = new(
                    guid.ToString(),
                    user.FirstName,
                    user.LastName,
                    user.NhsNumber,
                    user.Username,
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
    }
}