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
    <main>
      <div className="flex gap-8 w-full mt-8">
        <div className="w-[75%]">
          <FileUpload />
          <PlayersTable csvData={csvData} />
        </div>
        <div className="w-[20%] border border-black">
          <Optimizer csvData={csvData} />
        </div>
      </div>
    </main>
  );
};

export default ProjectionsPage;
