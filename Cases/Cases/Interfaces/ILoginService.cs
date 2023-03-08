using Cases.Models;
using Cases.Models.Entities;

namespace Cases.Interfaces
{
    public interface ILoginService
    {
        public string Generate(User user);
        public Task<User> Authenticate(UserLogin userLogin);
    }
}
