import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import EmailSender from "./components/EmailSender";

export default function App() {
  const [summary, setSummary] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>AI Meeting Notes Summarizer</h2>
      <UploadForm setSummary={setSummary} />
      {summary && (
        <>
          <h3>Generated Summary</h3>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            style={{ width: "100%", height: "200px" }}
          />
          <EmailSender summary={summary} />
        </>
      )}
    </div>
  );
}
