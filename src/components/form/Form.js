import React, { useState } from "react";
import "./Form.css";
import search from "./../../assets/search-outline.svg";
import dropdown from "./../../assets/chevron-down-outline.svg";

export default function Form({
  searchInput,
  activeFilter,
  handleChange,
  handleSubmit,
  toggleFilter,
}) {
  const [showDropdown, setShowDropdown] = useState(false);

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  function toggleDropdown() {
    setShowDropdown((prev) => !prev);
  }

  function renderFilter(region) {
    if (region === activeFilter) {
      return (
        <li
          key={region}
          onClick={toggleFilter}
          className="active"
          data-label={region}
        >
          <button type="button" data-label={region}>
            {region}
          </button>
        </li>
      );
    } else {
      return (
        <li key={region} onClick={toggleFilter} data-label={region}>
          <button type="button" data-label={region}>
            {region}
          </button>
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
