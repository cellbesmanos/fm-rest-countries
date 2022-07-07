import React from "react";
import Border from "../border/Border";
import "./Borders.css";

export default function Borders({ borders }) {
  return (
    <div>
      <h2>Borders:</h2>
      {borders.map((border) => (
        <Border key={border} countryCode={border} />
      ))}
    </div>
  );
}
