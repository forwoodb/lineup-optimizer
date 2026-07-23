import fs from "fs";
import { parse } from "csv-parse/sync";
import PlayersTable from "../components/PlayersTable";
import { CSVPlayer } from "../lib/types";
import Optimizer from "../components/Optimizer";
import FileUpload from "../components/FileUpload";

const ProjectionsPage = () => {
  const csvFile = fs.readFileSync("./app/python/csv-data/DKSalaries.csv");
  const csvData: CSVPlayer[] = parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
  });

  return (
    <>
      <h1>Optimizer Page</h1>
      <Optimizer csvData={csvData} />
      <FileUpload />

      <PlayersTable csvData={csvData} />
    </>
  );
};

export default ProjectionsPage;
