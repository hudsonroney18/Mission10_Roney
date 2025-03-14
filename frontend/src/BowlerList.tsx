import { useEffect, useState } from 'react';
import { bowler } from './types/bowler';
import { team } from './types/team';
import './BowlerList.css'; // Import the CSS file for styling

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);
  const [teams, setTeams] = useState<team[]>([]);

  useEffect(() => {
    const fetchBowler = async () => {
      const response = await fetch('https://localhost:5000/api/Bowler/bowler');
      const bowlerData = await response.json();
      setBowlers(bowlerData);
    };

    const fetchTeamData = async () => {
      const response = await fetch('https://localhost:5000/api/Bowler/team');
      const teamData = await response.json();
      setTeams(teamData);
    };
    fetchBowler();
    fetchTeamData();
  }, []);

  const getTeamName = (teamId: number): string => {
    const team = teams.find((team) => team.teamId === teamId);
    return team && (team.teamName === 'Sharks' || team.teamName === 'Marlins')
      ? team.teamName
      : '';
  };

  return (
    <div className="bowler-list-container">
      <h1 className="title">Bowler Info</h1>
      <table className="bowler-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>Team Name</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.bowlerLastName}</td>
              <td>{getTeamName(b.teamId)}</td>
              <td>{b.bowlerAddress}</td>
              <td>{b.bowlerCity}</td>
              <td>{b.bowlerState}</td>
              <td>{b.bowlerZip}</td>
              <td>{b.bowlerPhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlerList;
