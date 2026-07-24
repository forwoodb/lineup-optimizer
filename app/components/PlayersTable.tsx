"use client";

import { CSVPlayer } from "../lib/types";
import { useState, useEffect } from "react";

const PlayersTable = () => {
  const [csvData, setCsvData] = useState<CSVPlayer[]>([]);

  useEffect(() => {
    const load = async () => {
      const DKSalaries = localStorage.getItem("DKSalaries");
      if (!DKSalaries) return;

      const parsed = JSON.parse(DKSalaries);
      setCsvData(parsed); // now async → safe
    };

    load();
  }, []);

  return (
    <>
      <div className="mt-8 overflow-x-auto rounded-box border border-base-content/5 bg-base-300">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              {/* <th>Roster Position</th> */}
              <th>Pos</th>
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
