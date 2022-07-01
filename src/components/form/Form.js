import React, { useState } from "react";
import "./Form.css";
import search from "./../../assets/search-outline.svg";
import dropdown from "./../../assets/chevron-down-outline.svg";

/*

Form wil only fetch each time the user has:

- clicked the search icon
- hit enter

*/

export default function Form() {
  const [searchInput, setSearchInput] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeFilter, setActiveFilter] = useState("");

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  function handleChange(e) {
    const type = e.target.dataset.label;
    const value = e.target.value;

    switch (type) {
      case "search":
        setSearchInput(value);
        break;
      case "filter":
        break;
      default:
        throw new Error("Invalid form type.");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchInput) {
      return;
    }

    console.log(searchInput, activeFilter);
  }

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
    }

    return (
      <li onClick={toggleFilter} key={region} data-label={region}>
        {region}
      </li>
    );
  }

  function toggleFilter(e) {
    const filter = e.target.dataset.label;
    const content = e.target.textContent;

    if (!filter) {
      throw new Error(`Missing data label for filter: ${content}`);
    }

    if (filter === activeFilter) {
      setActiveFilter("");
    } else {
      setActiveFilter(filter);
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
