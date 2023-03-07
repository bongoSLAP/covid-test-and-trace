using Cases.Interfaces;
using Cases.Models;
using Cases.Models.Entities;
using MongoDB.Driver;

namespace Cases.Services;

public class VenueService : IVenueService
{
    private readonly IMongoCRUD _db;
    private readonly IUserHelper _userHelper;
    
    public VenueService(IMongoCRUD db, IUserHelper userHelper)
    {
        _db = db;
        _userHelper = userHelper;
    }

    public Venue? GetVenueByName(string name)
    {
        var filter = Builders<Venue>.Filter.Eq("Name", name);
        return _db.LoadFirstRecordByFilter<Venue>("venues", filter);
    }

    public List<Venue>? ListVenues()
    {
        return _db.LoadAllRecords<Venue>("venues");
    }
    
    public List<VenueHistory>? ListVenueHistory(string userId)
    {
        List<VenueHistory> venues = new List<VenueHistory>();
        var userIdFilter = Builders<VenueVisit>.Filter.Eq("UserId", userId);
        var venueVisits = _db.LoadAllRecordsByFilter<VenueVisit>("venue-visits", userIdFilter);

        foreach (VenueVisit venueVisit in venueVisits)
        {
            var venueIdFilter = Builders<Venue>.Filter.Eq("_id", venueVisit.VenueId);
            var venue = _db.LoadFirstRecordByFilter<Venue>("venues", venueIdFilter);
            var venueHistory = new VenueHistory(
                venue,
                venueVisit.VisitDate
            );
            
            venues.Append(venueHistory);
        }

        return venues;
    }

    public void CheckIntoVenue(CheckIn checkIn)
    {
        var user = _userHelper.GetUserByUsername(checkIn.Username);
        var venue = GetVenueByName(checkIn.VenueName);
        
        Guid guid = Guid.NewGuid();
        var venueVisit = new VenueVisit(
            guid.ToString(),
            user.Id,
            venue.Id,
            DateTime.Now
        );
        
        _db.InsertRecord("venue-visits", venueVisit);
    }
}