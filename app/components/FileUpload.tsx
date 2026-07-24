"use client";

import { ChangeEvent } from "react";

interface FileUploadPropTypes {
  handleUpload: (e: ChangeEvent<HTMLInputElement>) => void;
}

const FileUpload = ({ handleUpload }: FileUploadPropTypes) => {
  return (
    <>
      <fieldset className="fieldset">
        <legend className="fieldset-legend">DKSalaries</legend>
        <input
          type="file"
          name="file"
          onChange={handleUpload}
          className="file-input"
        />
        {/* <label className="label">Max size 2MB</label> */}
      </fieldset>
    </>
  );
};

export default FileUpload;
