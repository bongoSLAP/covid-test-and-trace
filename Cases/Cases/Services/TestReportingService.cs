using Cases.Interfaces;
using Cases.Models;
using Cases.Models.Entities;
using MongoDB.Driver;

namespace Cases.Services
{
    public class TestReportingService : ITestReportingService
    {
        private readonly IMongoCRUD _db;

        public TestReportingService(IMongoCRUD db)
        {
            _db = db;
        }

        public async void ReportResult(TestReport report, string username)
        {
            var filter = Builders<User>.Filter.Eq(u => u.Username, username);
            var currentUser = await _db.LoadFirstRecordByFilter("users", filter);

            if (currentUser != null)
            {
                var dateTested = report.DateTested;

                if (report.IsPositive)
                    currentUser.UpdateLastInfection(dateTested);

                currentUser.UpdateLastTested(dateTested);

                _db.UpsertRecordById("users", currentUser.Id, currentUser);
            }
        }
    }
}
