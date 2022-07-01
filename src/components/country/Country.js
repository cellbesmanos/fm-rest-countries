import React from "react";
import "./Country.css";

export default function Country() {
  return (
    <div className="Country">
      <img src="" alt="Country yey" className="Country__img" />

      <div className="Country__info">
        <h2 className="Country__name">Country name</h2>

        <div className="Country__stats">
          <div>
            <h3>Population:</h3>
            <span>81,770,900</span>
          </div>
          <div>
            <h3>Region:</h3>
            <span>Europe</span>
          </div>
          <div>
            <h3>Capital:</h3>
            <span>Berlin</span>
          </div>
        </div>
      </div>
    </div>
  );
}
