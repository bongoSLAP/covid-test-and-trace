using Cases.Models.Entities;

namespace Cases.Models;

public class VenueHistory
{
    public Venue Venue { get; set; }
    public DateTime VisitDate { get; set; }
    
    public VenueHistory(Venue venue, DateTime visitDate)
    {
        Venue = venue;
        VisitDate = visitDate;
    }
}