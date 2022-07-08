import React from "react";
import "./Country.css";

function Country({ img, name, population, region, capital }) {
  return (
    <div className="Country">
      <img src={img} alt={`flag of ${name}`} className="Country__img" />

      <div className="Country__info">
        <h2 className="Country__name">{name}</h2>

        <div className="Country__stats">
          <div>
            <h3>Population:</h3>
            <span>
              {population ? population.toLocaleString("en-US") : "N/A"}
            </span>
          </div>
          <div>
            <h3>Region:</h3>
            <span>{region || "N/A"}</span>
          </div>
          <div>
            <h3>Capital:</h3>
            <span>{capital[0] ? capital[0] : "N/A"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Country);
