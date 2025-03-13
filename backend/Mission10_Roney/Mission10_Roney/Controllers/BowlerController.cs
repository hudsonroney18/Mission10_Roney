using Mission10_Roney.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

[Route("api/[controller]")]
[ApiController]
public class BowlerController : ControllerBase
{
    private BowlingLeagueContext _bowlingContext;

    public BowlerController(BowlingLeagueContext temp)
    {
        _bowlingContext = temp;
    }
// Get bowler information with associated team data
    [HttpGet(Name = "GetBowlerInfo")]
    public IEnumerable<Bowler> Get()
    {
        var bowlerList = _bowlingContext.Bowlers.ToList();
        return bowlerList;
    }
}