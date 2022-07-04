import React from "react";
import "./Country.css";

export default function Country({ img, name, population, region, capital }) {
  return (
    <div className="Country">
      <img src={img} alt={`flag of ${name}`} className="Country__img" />

      <div className="Country__info">
        <h2 className="Country__name">{name}</h2>

        <div className="Country__stats">
          <div>
            <h3>Population:</h3>
            <span>{population}</span>
          </div>
          <div>
            <h3>Region:</h3>
            <span>{region}</span>
          </div>
          <div>
            <h3>Capital:</h3>
            <span>{capital || "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
