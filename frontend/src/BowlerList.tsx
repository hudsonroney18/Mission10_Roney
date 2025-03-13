import { useEffect, useState } from 'react';
import { bowler } from './types/Bowler';
import './BowlerList.css'; // Import the CSS file for styling

function BowlerList() {
  const [bowlers, setBowlers] = useState<bowler[]>([]);

  useEffect(() => {
    const fetchBowler = async () => {
      const response = await fetch('https://localhost:5000/api/Bowler');
      const data = await response.json();
      setBowlers(data);
    };
    fetchBowler();
  }, []);

  return (
    <div className="bowler-list-container">
      <h1 className="title">Bowler Info</h1>
      <table className="bowler-table">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Middle Name</th>
            <th>Last Name</th>
            <th>TeamId</th>
            <th>Bowler State</th>
          </tr>
        </thead>
        <tbody>
          {bowlers.map((b) => (
            <tr key={b.bowlerId}>
              <td>{b.bowlerFirstName}</td>
              <td>{b.bowlerMiddleInit}</td>
              <td>{b.bowlerLastName}</td>
              <td>{b.teamId}</td>
              <td>{b.bowlerState}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BowlerList;
