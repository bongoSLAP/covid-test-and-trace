namespace Cases.Models;

public class CheckIn
{
    public string VenueName { get; set; }
    public string? Username { get; set; }

    public CheckIn(string venueName, string? username)
    {
        VenueName = venueName;
        Username = username;
    }
}