import React, { useState } from "react";
import axios from "axios";

export default function UploadForm({ setSummary }) {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Please upload a transcript file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("prompt", prompt);

    try {
      const res = await axios.post("http://localhost:5000/summarize", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setSummary(res.data.summary);
    } catch (err) {
      alert("Error generating summary: " + err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="file"
        accept=".txt"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br />
      <textarea
        placeholder="Enter custom prompt..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        style={{ width: "100%", height: "80px", marginTop: "10px" }}
      />
      <br />
      <button type="submit">Generate Summary</button>
    </form>
  );
}
