"use client";

import { CSVPlayer } from "../lib/types";

interface PlayersTableProps {
  csvData: CSVPlayer[];
}

const PlayersTable = ({ csvData }: PlayersTableProps) => {
  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-300">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Roster Position</th>
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
                  <td>{player.Name}</td>
                  <td>{player["Roster Position"]}</td>
                  <td>{player.Salary}</td>
                  <td>{player["Game Info"]}</td>
                  <td>{player.TeamAbbrev}</td>
                  <td>{player.AvgPointsPerGame}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PlayersTable;
