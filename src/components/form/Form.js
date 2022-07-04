import React, { useState } from "react";
import "./Form.css";
import search from "./../../assets/search-outline.svg";
import dropdown from "./../../assets/chevron-down-outline.svg";

/*

Form wil only fetch each time the user has:

- clicked the search icon
- hit enter

*/

export default function Form({
  searchInput,
  activeFilter,
  handleChange,
  handleSubmit,
  toggleFilter,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  function toggleDropdown() {
    setShowDropdown((prev) => !prev);
  }

  function renderFilter(region) {
    if (region === activeFilter) {
      return (
        <li
          onClick={toggleFilter}
          className="active"
          key={region}
          data-label={region}
        >
          {region}
        </li>
      );
    } else {
      return (
        <li onClick={toggleFilter} key={region} data-label={region}>
          {region}
        </li>
      );
    }
  }

  return (
    <div className="Form">
      <form className="Form__search" onSubmit={handleSubmit}>
        <img src={search} alt="search icon" onClick={handleSubmit} />
        <input
          type="search"
          value={searchInput}
          onChange={handleChange}
          data-label="search"
          aria-label="search country"
          placeholder="Search for a country..."
          maxLength="30"
        />
      </form>

      <div className="Form__filter">
        <button
          type="button"
          className="Form__filter-btn"
          onClick={toggleDropdown}
        >
          <p>Filter by Region</p>
          <img src={dropdown} alt="arrow down icon" />
        </button>

        {showDropdown && (
          <ul className="Form__filter-options">
            {regions.map((region) => renderFilter(region))}
          </ul>
        )}
      </div>
    </div>
  );
}
