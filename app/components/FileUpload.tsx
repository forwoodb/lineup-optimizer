const FileUpload = () => {
  return (
    <div>
      <form action="">
        <label htmlFor="csv">Upload Projections</label>
        <input type="file" name="csv" id="csv" accept=".csv, text/csv" />
        <button className="btn">Upload</button>
      </form>
    </div>
  );
};

export default FileUpload;
