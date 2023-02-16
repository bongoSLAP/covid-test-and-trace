namespace Cases.Models.Entities
{
    public class User : UserLogin
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public int NhsNumber { get; set; }
        public string Email { get; set; }
        public string Telephone { get; set; }
        public string Postcode { get; set; }
        public DateTime? LastInfected { get; set; }
        public DateTime? LastTested { get; set; }
        public DateTime? LastContacted { get; set; }
        public int AuthFailCount { get; set; } = 0;
        public string AccountStatus { get; set; } = "open";

        public User(
            string id, 
            string firstName, 
            string lastName, 
            int nhsNumber, 
            string username, 
            string password, 
            string email, 
            string telephone, 
            string postcode,
            DateTime? lastInfected, 
            DateTime? lastTested,
            DateTime? lastContacted,
            int authFailCount,
            string accountStatus
        ) : base(id, username, password)
        {
            Id = id ?? throw new ArgumentNullException(nameof(id));
            FirstName = firstName ?? throw new ArgumentNullException(nameof(firstName));
            LastName = lastName;
            NhsNumber = nhsNumber;
            Username = username ?? throw new ArgumentNullException(nameof(username));
            Password = password ?? throw new ArgumentNullException(nameof(password));
            Email = email ?? throw new ArgumentNullException(nameof(email));
            Telephone = telephone ?? throw new ArgumentNullException(nameof(telephone));
            Postcode = postcode ?? throw new ArgumentNullException(nameof(postcode));
            LastInfected = lastInfected;
            LastTested = lastTested;
            LastContacted = lastContacted;
            AuthFailCount = authFailCount;
            AccountStatus = accountStatus ?? throw new ArgumentNullException(nameof(accountStatus));
        }
    }
}
