import fs from "fs";
import { parse } from "csv-parse/sync";
import PlayersTable from "../components/PlayersTable";
import { CSVPlayer } from "../lib/types";
import Optimizer from "../components/Optimizer";
import FileUploadSC from "../components/FileUploadSC";

const OptimizerPage = () => {
  const csvFile = fs.readFileSync("./app/python/csv-data/DKSalaries.csv");
  const csvData: CSVPlayer[] = parse(csvFile, {
    columns: true,
    skip_empty_lines: true,
  });

  return (
    <main>
      <div className="flex gap-8 w-[96%] mt-8 m-auto ">
        {/* <div className="flex"> */}
        <div className="flex-2">
          {/* <div> */}
          <FileUploadSC />
          <PlayersTable csvData={csvData} />
        </div>
        <div className="flex-1 ">
          <Optimizer csvData={csvData} />
        </div>
      </div>
    </main>
  );
};

export default OptimizerPage;
