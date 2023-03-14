namespace Cases.Models.Entities
{
    public class Postcode
    {
        public string Id { get; set; }
        public string Area { get; set; }
        public int InfectionCount { get; set; }
        public int Population { get; set; }

        public Postcode(
            string id, 
            string area, 
            int infectionCount, 
            int population
        )
        {
            Id = id;
            Area = area;
            InfectionCount = infectionCount;
            Population = population;
        }
        
        public void IncrementInfectionCount()
        {
            this.InfectionCount += 1;
        }
        
        public void DecrementInfectionCount()
        {
            this.InfectionCount -= 1;
        }
    }
}
