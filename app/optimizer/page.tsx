import fs from "fs";
import { parse } from "csv-parse/sync";

interface Player {
  Position: string;
  Name: string;
  ID: string;
  Salary: string;
  "Game Info": string;
  TeamAbbrev: string;
  AvgPointsPerGame: string;
}

const OptimizerPage = () => {
  const csvFile = fs.readFileSync("csv-data/DKSalaries.csv");
  const csvData: Player[] = parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
  });
  // console.log(csvData);

  return (
    <>
      <h1>Optimizer Page</h1>
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

export default OptimizerPage;
