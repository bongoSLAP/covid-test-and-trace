using Cases.Interfaces;
using System.Security.Claims;
using Cases.Models.Entities;
using MongoDB.Driver;

namespace Cases.Helpers;

public class UserHelper : IUserHelper
{
    private readonly IMongoCRUD _db;
    
    public UserHelper(IMongoCRUD db)
    {
        _db = db;
    }
    
    public Claim? GetUsernameClaim(ClaimsPrincipal user)
    {
        return user.FindFirst(ClaimTypes.NameIdentifier);
    }

    public async Task<User> GetUserByUsername(string username)
    {
        var filter = Builders<User>.Filter.Eq(u => u.Username, username.ToLower());
        return await _db.LoadFirstRecordByFilter<User>("users", filter);
    }

    public async Task<User> GetUserByClaim(ClaimsPrincipal user)
    {
        var usernameClaim = GetUsernameClaim(user);
        return await GetUserByUsername(usernameClaim.Value);
    }
}