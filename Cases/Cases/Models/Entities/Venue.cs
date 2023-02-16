namespace Cases.Models.Entities
{
    public class Venue
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public DateTime ClosingTime { get; set; }

        public Venue(
            string id, 
            string name, 
            string address, 
            DateTime closingTime
        )
        {
            Id = id ?? throw new ArgumentNullException(nameof(id));
            Name = name;
            Address = address;
            ClosingTime = closingTime;
        }
    }
}
