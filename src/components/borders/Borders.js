import React from "react";
import Border from "../border/Border";
import "./Borders.css";

export default function Borders({ borders }) {
  return (
    <div className="Borders">
      <h2>Border Countries:</h2>
      <div className="Borders__list">
        {borders.map((border) => (
          <Border key={border} countryCode={border} />
        ))}
      </div>
    </div>
  );
}
