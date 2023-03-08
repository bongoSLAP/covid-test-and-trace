using Cases.Models;
using Cases.Models.Entities;

namespace Cases.Interfaces;

public interface IVenueService
{
    public Task<Venue> GetVenueByName(string name);
    public Task<List<Venue>> ListVenues();
    public Task<List<VenueHistory>> ListVenueHistory(string userId);
    public void CheckIntoVenue(CheckIn checkIn);
}