namespace Cases.Models
{
    public class UserLogin
    {
        public string Id { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

        public UserLogin(string id, string username, string password)
        {
            Id = id;
            Username = username ?? throw new ArgumentNullException(nameof(username));
            Password = password ?? throw new ArgumentNullException(nameof(password));
        }
    }
}
