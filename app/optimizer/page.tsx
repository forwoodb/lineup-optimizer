import fs from "fs";
import { parse } from "csv-parse/sync";
import PlayersTable from "../components/PlayersTable";
import { Player } from "../types";

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
      <PlayersTable csvData={csvData} />
    </>
  );
};

export default OptimizerPage;
