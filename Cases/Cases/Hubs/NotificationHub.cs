using Cases.Interfaces;
using Microsoft.AspNetCore.SignalR;
namespace Cases.Hubs;


public class NotificationHub : Hub, INotificationHub
{
    public async Task SendNotification(string message)
    {
        await Clients.All.SendAsync("ReceiveNotification", message);
    }
}