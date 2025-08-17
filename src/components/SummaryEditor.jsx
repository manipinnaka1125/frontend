function SummaryEditor({ summary, setSummary }) {
  return (
    <div>
      <h2>✏️ Edit Summary</h2>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        rows="10"
        cols="50"
      />
    </div>
  );
}

export default SummaryEditor;