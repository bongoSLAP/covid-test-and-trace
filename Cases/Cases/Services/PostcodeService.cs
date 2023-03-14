using System.Text.RegularExpressions;
using Amazon.Runtime.Internal.Util;
using Cases.Interfaces;
using Cases.Models.Entities;
using MongoDB.Driver;

namespace Cases.Services;

public class PostcodeService : IPostcodeService
{
    private readonly IMongoCRUD _db;
    
    public PostcodeService(IMongoCRUD db)
    {
        _db = db;
    }

    private string? GetPostcodeArea(string postcode)
    {
        Regex regex = new Regex(@"\D+");
        Match match = regex.Match(postcode);
        
        if (match.Success)
            return match.Value;

        return null;
    }

    public async Task UpdateInfectionCount(bool isIncrement, string userPostcode)
    {
        var area = GetPostcodeArea(userPostcode);

        if (area == null)
            throw new Exception("Postcode area was not detected in postcode.");
        
        var filter = Builders<Postcode>.Filter.Eq(p => p.Area, area);
        var postcode = await _db.LoadFirstRecordByFilter("postcodes", filter);

        if (postcode == null)
            throw new Exception("Postcode unrecognised");
        
        if (isIncrement)
            postcode.IncrementInfectionCount();
        else
            postcode.DecrementInfectionCount();
        
        _db.UpsertRecordById("postcodes", postcode.Id, postcode);
    }
}
