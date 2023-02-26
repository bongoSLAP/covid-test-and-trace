using Cases.Models;

namespace Cases.Interfaces
{
    public interface ITestReportingService
    {
        public void ReportResult(TestReport report, string username);
    }
}
