using MongoDB.Driver;

namespace Cases.Data
{
    public class MongoCRUD
    {
        IMongoDatabase _db;

        public MongoCRUD()
        {
            string databaseName = "cases-data";

            IConfigurationRoot configuration = new ConfigurationBuilder()
               .SetBasePath(AppDomain.CurrentDomain.BaseDirectory)
               .AddJsonFile("appsettings.json")
               .Build();

            var settings = MongoClientSettings.FromConnectionString(configuration.GetConnectionString("DefaultConnection"));
            settings.ServerApi = new ServerApi(ServerApiVersion.V1);

            var client = new MongoClient(settings);
            _db = client.GetDatabase(databaseName);
        }
    }
}
