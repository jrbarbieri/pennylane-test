import React from "react";
import Pagination from "./Pagination";

export default function Header({ page, totalPages, onPageChange }) {
  return (
    <header
      style={{
        width: "100%",
        background: "#fff",
        padding: "2rem 2rem 1.2rem 2rem",
        marginBottom: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
        borderBottom: "4px solid #ff9800",
        minHeight: "110px",
      }}
    >
      <h1
        className="quick-title"
        style={{
          fontSize: "2.8rem",
          fontWeight: 900,
          color: "#ff9800",
          margin: 0,
          letterSpacing: "1px",
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
          fontFamily: "Montserrat, Arial, sans-serif",
          position: "relative",
          cursor: "pointer",
        }}
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <span style={{ fontSize: "2.2rem", marginRight: "0.2em" }}>⏱️</span>
        <span
          style={{
            background: "linear-gradient(90deg, #ff9800 60%, #fff3e0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Montserrat, Arial, sans-serif",
            fontWeight: 900,
            letterSpacing: "2px",
            padding: "0 0.2em",
            borderRadius: "8px",
            boxShadow: "0 2px 0 #ffb74d",
          }}
        >
          Quick
        </span>
        <span
          style={{
            color: "#b85c00",
            fontWeight: 700,
            fontFamily: "Montserrat, Arial, sans-serif",
            letterSpacing: "1px",
            marginLeft: "0.2em",
          }}
        >
          Recipe
        </span>
        <span style={{ fontSize: "2.2rem", marginLeft: "0.2em" }}>🍳</span>
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          marginRight: "0.5rem",
        }}
      >
        <Pagination
          page={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </header>
  );
}
