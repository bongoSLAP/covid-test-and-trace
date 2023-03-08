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

    public async Task<Venue> GetVenueByName(string name)
    {
        var filter = Builders<Venue>.Filter.Eq(v => v.Name, name);
        return await _db.LoadFirstRecordByFilter<Venue>("venues", filter) ?? null;
    }

    public async Task<List<Venue>> ListVenues()
    {
        return await _db.LoadAllRecords<Venue>("venues");
    }
    
    public async Task<List<VenueHistory>> ListVenueHistory(string userId)
    {
        List<VenueHistory> venues = new List<VenueHistory>();
        var userIdFilter = Builders<VenueVisit>.Filter.Eq(vv => vv.UserId, userId);
        var venueVisits = await _db.LoadAllRecordsByFilter<VenueVisit>("venue-visits", userIdFilter);

        foreach (VenueVisit venueVisit in venueVisits)
        {
            var venueIdFilter = Builders<Venue>.Filter.Eq(v => v.Id, venueVisit.VenueId);
            var venue = await _db.LoadFirstRecordByFilter<Venue>("venues", venueIdFilter);
            var venueHistory = new VenueHistory(
                venue,
                venueVisit.VisitDate
            );
            
            venues.Add(venueHistory);
        }

        return venues;
    }

    public async void CheckIntoVenue(CheckIn checkIn)
    {
        var user = await _userHelper.GetUserByUsername(checkIn.Username);
        var venue = await GetVenueByName(checkIn.VenueName);
        
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