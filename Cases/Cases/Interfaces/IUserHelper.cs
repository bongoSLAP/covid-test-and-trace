using System.Security.Claims;
using Cases.Models.Entities;

namespace Cases.Interfaces;

public interface IUserHelper
{
    public User? GetUserByUsername(string username);
    public Claim? GetUsernameClaim(ClaimsPrincipal user);
}