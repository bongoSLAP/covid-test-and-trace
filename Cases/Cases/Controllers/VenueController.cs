using Cases.Interfaces;
using Cases.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Cases.Controllers;

public class VenueController : Controller
{
    private readonly IVenueService _venueService;
    private readonly IUserHelper _userHelper;
    
    public VenueController(IUserHelper userHelper, IVenueService venueService)
    {
        _userHelper = userHelper;
        _venueService = venueService;
    }
    
    [Authorize]
    [HttpPost("Venue/CheckIn")]
    public IActionResult CheckIn([FromBody] CheckIn checkIn)
    {
        if (checkIn == null)
            return BadRequest("Check-in is null");

        var usernameClaim = _userHelper.GetUsernameClaim(HttpContext.User);
        checkIn.Username = usernameClaim?.Value;

        if (_venueService.GetVenueByName(checkIn.VenueName) == null)
            return BadRequest("Venue does not exist");

        try
        {
            _venueService.CheckIntoVenue(checkIn);
            return Ok();
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [Authorize]
    [HttpGet("Venue/ViewHistory")]
    public IActionResult ViewHistory()
    {
        var user = _userHelper.GetUserByClaim(HttpContext.User);
        
        try
        {
            var venues = _venueService.ListVenueHistory(user.Id);
            return Ok(venues);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}