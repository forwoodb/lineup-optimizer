"use client";

import { useState, useEffect } from "react";
import fs from "fs";
import { parse } from "csv-parse/sync";
import PlayersTable from "../components/PlayersTable";
import { CSVPlayer } from "../lib/types";
import Optimizer from "../components/Optimizer";
import FileUpload from "../components/FileUpload";
const OptimizerClient = () => {
  // const DKSalaries = localStorage.getItem("DKSalaries");
  // // const csvFile = fs.readFileSync("./app/python/csv-data/DKSalaries.csv");
  // // const csvData: CSVPlayer[] = parse(csvFile, {
  // //   columns: true,
  // //   skip_empty_lines: true,
  // // });

  // let csvData;
  // if (DKSalaries) {
  //   csvData = JSON.parse(DKSalaries);
  // }

  return (
    <div>
      <h1>Optimizer Client</h1>
      <div className="flex gap-8 w-[96%] mt-8 m-auto ">
        <div className="flex-2">
          {/* <FileUploadSC /> */}
          <FileUpload />
          <PlayersTable />
          {/* <PlayersTable csvData={csvData} /> */}
        </div>
        <div className="flex-1 ">
          <Optimizer />
        </div>
      </div>
    </div>
  );
};

export default OptimizerClient;
