"use client";

import { useState } from "react";
import { Player } from "../lib/types";

interface PlayersTableProps {
  csvData: Player[];
}

const PlayersTable = ({ csvData }: PlayersTableProps) => {
  const [lineup, setLineup] = useState<Player[]>();

  const generateLineup = async () => {
    const res = await fetch("/api/optimize", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(csvData),
    });

    const data = await res.json();
    // console.log(data);
    setLineup(data);
  };

  return (
    <>
      <button onClick={generateLineup}>Generate Lineup</button>
      {/* <p>{JSON.stringify(lineup)}</p> */}
      {/* <p>{JSON.stringify(lineup["Python"])}</p> */}
      {/* <p>{lineup.Python}</p> */}
      {/* <p>{lineup["Python"]}</p> */}
      {lineup?.map((player, i) => {
        return (
          <div key={i}>
            <p>{i + " " + player.Name + " " + player["Roster Position"]}</p>;
          </div>
        );
      })}
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
    </>
  );
};

export default PlayersTable;
