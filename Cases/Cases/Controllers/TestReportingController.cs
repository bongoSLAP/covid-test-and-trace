using Cases.Interfaces;
using Cases.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Cases.Controllers
{
    public class TestReportingController : Controller
    {
        ITestReportingService _testReportingService;
        public TestReportingController(ITestReportingService testReportingService)
        {
            _testReportingService = testReportingService;
        }

        [Authorize]
        [HttpPost("Report")]
        public IActionResult Report([FromBody] TestReport report)
        {
            if (report == null)
                return BadRequest("Report is null");

            var currentUser = HttpContext.User;
            var usernameClaim = currentUser.FindFirst(ClaimTypes.NameIdentifier);

            if (usernameClaim == null)
                return BadRequest("Cannot identify requester");

            try
            {
                _testReportingService.ReportResult(report, usernameClaim.Value);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
