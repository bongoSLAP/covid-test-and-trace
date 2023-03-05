namespace Cases.Models.Entities
{
    public class Venue
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string Postcode { get; set; }
        public DateTime ClosingTime { get; set; }
        public int CheckInCode { get; set; }

        public Venue(
            string id, 
            string name,
            string address,
            string postcode,
            DateTime closingTime,
            int checkInCode
        )
        {
            Id = id;
            Name = name;
            Postcode = postcode;
            Address = address;
            Postcode = postcode;
            ClosingTime = closingTime;
            CheckInCode = checkInCode;
        }
    }
}
