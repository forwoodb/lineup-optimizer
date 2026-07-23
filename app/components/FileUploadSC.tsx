const FileUploadSC = () => {
  const fileUploadAction = async (formData: FormData) => {
    "use server";

    const file = formData.get("file") as File;
    const text = await file.text();

    console.log(text);
  };

  return (
    <div>
      <form action={fileUploadAction}>
        <input type="file" name="file" className="file-input" />
        <button className="btn">Upload</button>
      </form>
    </div>
  );
};

export default FileUploadSC;
