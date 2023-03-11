namespace Cases.Interfaces;

public interface INotificationHub
{
    public Task SendNotification(string message);
}