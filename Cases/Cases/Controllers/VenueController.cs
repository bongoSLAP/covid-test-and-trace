using Cases.Helpers;
using Cases.Hubs;
using Cases.Interfaces;
using Cases.Models;
using Cases.Models.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace Cases.Controllers;

public class VenueController : Controller
{
    private readonly IVenueService _venueService;
    private readonly IUserHelper _userHelper;
    private readonly IMongoCRUD _db;
    private readonly INotificationHub _hub;
    
    public VenueController(IUserHelper userHelper, IVenueService venueService, IMongoCRUD db, INotificationHub hub)
    {
        _userHelper = userHelper;
        _venueService = venueService;
        _db = db;
        _hub = hub;
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
    public async Task<IActionResult> ViewHistory()
    {
        var user = await _userHelper.GetUserByClaim(HttpContext.User);
        
        try
        {
            var venues = await _venueService.ListVenueHistory(user.Id);
            
            return Ok(venues);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }
}