using Cases.Interfaces;
using Cases.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Cases.Controllers
{
    public class TestReportingController : Controller
    {
        private readonly ITestReportingService _testReportingService;
        private readonly IUserHelper _userHelper;
        
        public TestReportingController(ITestReportingService testReportingService, IUserHelper userHelper)
        {
            _testReportingService = testReportingService;
            _userHelper = userHelper;
        }

        [Authorize]
        [HttpPost("Report")]
        public IActionResult Report(TestReport report)
        {
            if (report == null)
                return BadRequest("Report is null");

            var usernameClaim = _userHelper.GetUsernameClaim(HttpContext.User);

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
