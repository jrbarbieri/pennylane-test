import React, { useState } from "react";
import { useEffect } from "react";

export default function SearchSidebar({
  query,
  onSearch,
  resultsCount,
  hasSearched,
}) {
  const [input, setInput] = useState(query);

  useEffect(() => {
    setInput(query);
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <div
        style={{
          display: "flex",
          border: "2px solid #ffb74d",
          borderRadius: "4px",
          overflow: "hidden",
        }}
      >
        <input
          type="text"
          value={input}
          required
          autoFocus
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search for a recipe..."
          style={{
            flex: 1,
            padding: "0.5rem",
            border: "none",
            outline: "none",
            background: "transparent",
          }}
        />
        <button
          type="submit"
          style={{
            background: "none",
            border: "none",
            padding: "0.5rem 1rem",
            cursor: "pointer",
            fontSize: "1.2rem",
            height: "100%",
          }}
          aria-label="Search"
        >
          🔍
        </button>
      </div>

      {hasSearched && (
        <div style={{ marginTop: "0.5rem", fontStyle: "italic" }}>
          {resultsCount > 0
            ? `${resultsCount} recipe${resultsCount > 1 ? "s" : ""} found`
            : "No recipes found"}
        </div>
      )}
    </form>
  );
}
