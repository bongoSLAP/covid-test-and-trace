namespace Cases.Models.Entities
{
    public class User
    {
        public string Id { get; set; }
        public string FirstName { get; set; }
        public int NhsNumber { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public string Telephone { get; set; }
        public string Postcode { get; set; }
        public DateTime LastInfected { get; set; }
        public DateTime LastTested { get; set; }
        public DateTime LastContacted { get; set; }
        public int AuthFailCount { get; set; } = 0;
        public string AccountStatus { get; set; } = "open";

        public User(string id, string firstName, int nhsNumber, string username, string password, string email, string telephone, string postcode, DateTime lastInfected, DateTime lastTested, DateTime lastContacted, int authFailCount, string accountStatus)
        {
            Id = id ?? throw new ArgumentNullException(nameof(id));
            FirstName = firstName;
            NhsNumber = nhsNumber;
            Username = username;
            Password = password;
            Email = email;
            Telephone = telephone;
            Postcode = postcode;
            LastInfected = lastInfected;
            LastTested = lastTested;
            LastContacted = lastContacted;
            AuthFailCount = authFailCount;
            AccountStatus = accountStatus;
        }
    }
}
