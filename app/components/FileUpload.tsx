"use client";
import { ChangeEvent } from "react";
import Papa from "papaparse";

const FileUpload = () => {
  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    Papa.parse(file, {
      headers: true,
      skipEmptyLines: true,
      complete: (results) => {
        localStorage.setItem("DKSalaries", JSON.stringify(results.data));
        console.log("Saved: ", results.data);
      },
    });
  };
  return (
    <>
      <input
        type="file"
        name="file"
        onChange={handleUpload}
        className="file-input"
      />
    </>
  );
};

export default FileUpload;
