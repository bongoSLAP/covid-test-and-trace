namespace Cases.Models.Entities
{
    public class Postcode
    {
        public string Id { get; set; }
        public string Area { get; set; }
        public int InfectionCount { get; set; }
        public int Population { get; set; }
        public List<string> UsersInPostcode { get; set; }

        public Postcode(
            string id, 
            string area, 
            int infectionCount, 
            int population, 
            List<string> usersInPostcode
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
