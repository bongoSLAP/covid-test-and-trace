namespace Cases.Models.Entities
{
    public class VenueVisit
    {
        public string Id { get; set; }
        public string UserId { get; set; }
        public string VenueId { get; set; }
        public DateTime VisitDate { get; set; }

        public VenueVisit(
            string id, 
            string userId, 
            string venueId, 
            DateTime visitDate
        )
        {
            Id = id ?? throw new ArgumentNullException(nameof(id));
            UserId = userId ?? throw new ArgumentNullException(nameof(userId));
            VenueId = venueId ?? throw new ArgumentNullException(nameof(venueId));
            VisitDate = visitDate;
        }
    }
}
