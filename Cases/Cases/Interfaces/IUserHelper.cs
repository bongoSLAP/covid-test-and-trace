using System.Security.Claims;
using Cases.Models.Entities;

namespace Cases.Interfaces;

public interface IUserHelper
{
    public Claim? GetUsernameClaim(ClaimsPrincipal user);
    public Task<User> GetUserByUsername(string username);
    public Task<User> GetUserByClaim(ClaimsPrincipal user);
}