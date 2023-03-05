using Cases.Interfaces;
using Cases.Models.Entities;
using Newtonsoft.Json;

namespace Cases.Helpers;

public class DummyDataHelper
{
    private readonly IMongoCRUD _db;
    
    public DummyDataHelper(IMongoCRUD db)
    {
        _db = db;
    }
    
    public List<User> GetDummyUsers()
    {
        string json = File.ReadAllText(".\\Dummy\\User.json");
        return JsonConvert.DeserializeObject<List<User>>(json);
    }
}