namespace Cases.Models.Entities
{
    public class Venue
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public DateTime ClosingTime { get; set; }
        public int CheckInCode { get; set; }

        public Venue(
            string id, 
            string name,
            string address,
            DateTime closingTime,
            int checkInCode
        )
        {
            Id = id;
            Name = name;
            Address = address;
            ClosingTime = closingTime;
            CheckInCode = checkInCode;
         }
    }
}
