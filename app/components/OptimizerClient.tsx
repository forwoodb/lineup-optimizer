"use client";

import { useState, useEffect } from "react";
import fs from "fs";
import { parse } from "csv-parse/sync";
import PlayersTable from "../components/PlayersTable";
import { CSVPlayer } from "../lib/types";
import Optimizer from "../components/Optimizer";
import FileUpload from "../components/FileUpload";

import { ChangeEvent } from "react";
import Papa from "papaparse";

const OptimizerClient = () => {
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

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: (results) => {
        localStorage.setItem("DKSalaries", JSON.stringify(results.data));
        setCsvData(results.data as CSVPlayer[]);
        console.log("Saved: ", results.data);
      },
    });
  };

  return (
    <div>
      <h1>Optimizer Client</h1>
      <div className="flex gap-8 w-[96%] mt-8 m-auto ">
        <div className="flex-2">
          {/* <FileUploadSC /> */}
          <FileUpload handleUpload={handleUpload} />
          <PlayersTable csvData={csvData} />
          {/* <PlayersTable csvData={csvData} /> */}
        </div>
        <div className="flex-1 ">
          <Optimizer csvData={csvData} />
        </div>
      </div>
    </div>
  );
};

export default OptimizerClient;
