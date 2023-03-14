using Cases.Interfaces;
using Cases.Models;
using Cases.Models.Entities;
using MongoDB.Driver;

namespace Cases.Services
{
    public class TestReportingService : ITestReportingService
    {
        private readonly IMongoCRUD _db;
        private readonly IPostcodeService _postcodeService;

        public TestReportingService(IMongoCRUD db, IPostcodeService postcodeService)
        {
            _db = db;
            _postcodeService = postcodeService;
        }

        public async void ReportResult(TestReport report, string username)
        {
            var filter = Builders<User>.Filter.Eq(u => u.Username, username);
            var currentUser = await _db.LoadFirstRecordByFilter("users", filter);

            if (currentUser != null)
            {
                var dateTested = report.DateTested;

                if (report.IsPositive)
                {
                    _postcodeService.UpdateInfectionCount(true, currentUser.Postcode);
                    currentUser.UpdateLastInfection(dateTested);
                }
                else
                {
                    var infectiousPeriod = TimeSpan.FromDays(10);
                    
                    if (DateTime.Now - currentUser.LastInfected < infectiousPeriod) // if less than 10 days has passed since infection date
                    {
                        _postcodeService.UpdateInfectionCount(false, currentUser.Postcode);
                    }
                }

                currentUser.UpdateLastTested(dateTested);
                _db.UpsertRecordById("users", currentUser.Id, currentUser);
            }
        }
    }
}
