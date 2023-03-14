using Cases.Models.Entities;

namespace Cases.Interfaces;

public interface IPostcodeService
{
    public Task UpdateInfectionCount(bool isIncrement, string userPostcode);
}
