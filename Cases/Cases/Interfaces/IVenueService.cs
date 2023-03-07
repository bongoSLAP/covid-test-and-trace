using Cases.Models;
using Cases.Models.Entities;

namespace Cases.Interfaces;

public interface IVenueService
{
    public Venue? GetVenueByName(string name);
    public List<Venue>? ListVenues();
    public List<VenueHistory>? ListVenueHistory(string userId);
    public void CheckIntoVenue(CheckIn checkIn);
}