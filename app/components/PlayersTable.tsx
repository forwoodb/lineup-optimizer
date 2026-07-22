"use client";

import { ChangeEvent, useState } from "react";
import { CSVPlayer, LineupPlayer } from "../lib/types";

interface PlayersTableProps {
  csvData: CSVPlayer[];
}

const PlayersTable = ({ csvData }: PlayersTableProps) => {
  const [lineup, setLineup] = useState<LineupPlayer[]>();
  const [file, setFile] = useState<File | null>(null);

  const generateLineup = async () => {
    const res = await fetch("/api/optimize", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(csvData),
    });

    const data = await res.json();
    setLineup(data);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleFileSubmit = async (formData: FormData) => {
    fetch("https://httpbin.org/post", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <>
      <div className="flex">
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-300">
          <form action={handleFileSubmit}>
            <label htmlFor="csv">Upload Projections</label>
            <input
              type="file"
              name="csv"
              id="csv"
              accept=".csv, text/csv"
              onChange={handleFileChange}
            />
            <button className="btn">Upload</button>
          </form>
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
        <div>
          <button onClick={generateLineup}>Generate Lineup</button>
          {lineup?.map((player, i) => {
            return (
              <div key={i}>
                <p>{`${i} ${player.Name} ${player["Roster Position"]} ${player.Salary} ${player.Points}`}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PlayersTable;
