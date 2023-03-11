using Cases.Interfaces;
using Microsoft.AspNetCore.SignalR;
namespace Cases.Hubs;


public class NotificationHub : Hub, INotificationHub
{
    private readonly IHubContext<NotificationHub> _context;
    
    public NotificationHub(IHubContext<NotificationHub> context)
    {
        _context = context;
    }
    
    public async Task SendNotification(string message)
    {
        await _context.Clients.All.SendAsync("ReceiveNotification", message);
        Console.WriteLine("Message sent!");
    }
}