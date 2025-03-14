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
    [HttpGet("bowler", Name = "GetBowlerInfo")]
    public IEnumerable<Bowler> GetBowlerInfo()
    {
        var bowlerList = _bowlingContext.Bowlers.Where(b => b.TeamId == 1 || b.TeamId ==2).ToList();
        return bowlerList;
    }
    
    // Get team information
    [HttpGet("team", Name = "GetTeamInfo")]
    public IEnumerable<Team> GetTeamInfo()
    {
        var teamList = _bowlingContext.Teams.ToList();
        return teamList;
    }
}