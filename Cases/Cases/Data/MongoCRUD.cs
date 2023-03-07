using Cases.Interfaces;
using MongoDB.Driver;

namespace Cases.Data
{
    public class MongoCRUD : IMongoCRUD
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

        public void InsertRecord<T>(string table, T record)
        {
            var collection = _db.GetCollection<T>(table);
            collection.InsertOne(record);
        }
        
        public void InsertRange<T>(string table, List<T> record)
        {
            var collection = _db.GetCollection<T>(table);
            collection.InsertMany(record);
        }

        public T LoadFirstRecordByFilter<T>(string table, FilterDefinition<T> filter)
        {
            var collection = _db.GetCollection<T>(table);
            return collection.Find(filter).FirstOrDefault();
        }

        public List<T> LoadAllRecordsByFilter<T>(string table, FilterDefinition<T> filter)
        {
            var collection = _db.GetCollection<T>(table);
            return collection.Find(filter).ToList();
        }
        
        public List<T> LoadAllRecords<T>(string table)
        {
            var collection = _db.GetCollection<T>(table);
            return collection.Find(FilterDefinition<T>.Empty).ToList();
        }

        public void UpsertRecordById<T>(string table, string id, T record)
        {
            var collection = _db.GetCollection<T>(table);
            var result = collection.ReplaceOne(
                new MongoDB.Bson.BsonDocument("_id", id),
                record,
                new ReplaceOptions { IsUpsert = true });
        }

        public void DeleteRecordByFilter<T>(string table, FilterDefinition<T> filter)
        {
            var collection = _db.GetCollection<T>(table);
            collection.DeleteOne(filter);
        }
    }
}
