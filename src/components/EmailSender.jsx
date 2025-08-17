import React, { useState } from "react";
import axios from "axios";

export default function EmailSender({ summary }) {
  const [emails, setEmails] = useState("");

  const sendEmail = async () => {
    try {
      const res = await axios.post("https://meeting-notes-backend-nt4i.onrender.com/send-email", {
        emails,
        summary,
      });
      alert(res.data.message);
    } catch (err) {
      alert("Error sending email: " + err.message);
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Share via Email</h3>
      <input
        type="text"
        placeholder="Enter recipient emails (comma separated)"
        value={emails}
        onChange={(e) => setEmails(e.target.value)}
        style={{ width: "100%" }}
      />
      <br />
      <button onClick={sendEmail} style={{ marginTop: "10px" }}>
        Send Email
      </button>
    </div>
  );
}
