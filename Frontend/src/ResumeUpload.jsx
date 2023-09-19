import { useState } from "react";

function ResumeUpload() {
  const [resume, setResume] = useState(null);
  const [_, setDragging] = useState(false); //eslint-disable-line

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
    handleSubmit(event.target.files[0]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setDragging(false);
    if (event.dataTransfer.items && event.dataTransfer.items[0]) {
      const file = event.dataTransfer.items[0].getAsFile();
      setResume(file);
      handleSubmit(file); // Automatically submit upon file drop;
    }
  };

  const handleSubmit = () => {
    if (resume) {
      console.log("File selected: ", resume.name);
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
      onDragLeave={handleDragLeave}
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
      {/* <button onClick={handleUploadClick}>Upload Resume</button> */}
      <p>Click to Upload or Drag and Drop</p>
    </div>
  );
}

export default ResumeUpload;
