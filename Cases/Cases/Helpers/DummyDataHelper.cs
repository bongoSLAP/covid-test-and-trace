using Cases.Interfaces;
using Cases.Models.Entities;
using Cases.Services;
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
    
    public List<Venue> GetDummyVenues()
    {
        string json = File.ReadAllText(".\\Dummy\\Venue.json");
        return JsonConvert.DeserializeObject<List<Venue>>(json);
    }
    
    public List<Postcode> GetDummyPostcodes()
    {
        string json = File.ReadAllText(".\\Dummy\\Postcode.json");
        return JsonConvert.DeserializeObject<List<Postcode>>(json);
    }
}