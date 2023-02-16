namespace Cases.Models.Entities
{
    public class Postcode
    {
        public string Id { get; set; }
        public string Area { get; set; }
        public int InfectionCount { get; set; }
        public int Population { get; set; }
        public List<User> UsersInPostcode { get; set; }

        public Postcode(
            string id, 
            string area, 
            int infectionCount, 
            int population, 
            List<User> usersInPostcode
        )
        {
            Id = id ?? throw new ArgumentNullException(nameof(id));
            Area = area;
            InfectionCount = infectionCount;
            Population = population;
            UsersInPostcode = usersInPostcode;
        }
    }
}
