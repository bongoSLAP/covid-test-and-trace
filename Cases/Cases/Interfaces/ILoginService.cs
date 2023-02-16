using Cases.Models;
using Cases.Models.Entities;

namespace Cases.Interfaces
{
    public interface ILoginService
    {
        public string Generate(User user);
        public User? Authenticate(UserLogin userLogin);
    }
}
