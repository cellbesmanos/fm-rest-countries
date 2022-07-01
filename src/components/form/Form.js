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

    console.log(searchInput);
    setSearchInput("");
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <div className="Form__search">
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
      </div>
    </form>
  );
}
