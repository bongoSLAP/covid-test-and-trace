using System.Security.Claims;
using Cases.Models.Entities;

namespace Cases.Interfaces;

public interface IUserHelper
{
    public Claim? GetUsernameClaim(ClaimsPrincipal user);
    public User? GetUserByUsername(string username);
    public User? GetUserByClaim(ClaimsPrincipal user);
}