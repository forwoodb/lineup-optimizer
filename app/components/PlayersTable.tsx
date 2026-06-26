"use client";

import { Player } from "../types";

interface PlayersTableProps {
  csvData: Player[];
}

const PlayersTable = ({ csvData }: PlayersTableProps) => {
  const generateLineup = async () => {
    const res = await fetch("/api/optimize", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(csvData),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <>
      <button onClick={generateLineup}>Generate Lineup</button>
      <table className="table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Game Info</th>
            <th>Team</th>
            <th>APPG</th>
          </tr>
        </thead>
        <tbody>
          {csvData.map((player) => {
            return (
              <tr key={player.ID}>
                <td>
                  <input type="checkbox" name="lock" id="lock" />
                </td>
                <td>{player.Position}</td>
                <td>{player.Name}</td>
                <td>{player.Salary}</td>
                <td>{player["Game Info"]}</td>
                <td>{player.TeamAbbrev}</td>
                <td>{player.AvgPointsPerGame}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default PlayersTable;
