function ResumeUpload() {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleSubmit(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.items && event.dataTransfer.items[0]) {
      const file = event.dataTransfer.items[0].getAsFile();
      handleSubmit(file);
    }
  };

  const handleSubmit = (file) => {
    if (file) {
      console.log("File selected: ", file.name);
      // Later here we will make an API call to the backend
    } else {
      console.log("No file selected");
    }
  };

  const openFileDialog = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div
      onClick={openFileDialog}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        border: "2px dashed #000",
        padding: "20px",
        width: "300px",
        textAlign: "center",
        cursor: "pointer",
      }}
    >
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
      <p>Click to Upload or Drag and Drop</p>
    </div>
  );
}

export default ResumeUpload;
