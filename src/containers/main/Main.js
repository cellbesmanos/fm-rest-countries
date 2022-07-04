import React, { useState } from "react";
import Country from "../../components/country/Country";
import Form from "../../components/form/Form";
import "./Main.css";
import useFetch from "../../useFetch";

export default function Main() {
  const [searchInput, setSearchInput] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const baseURL = "https://restcountries.com/v3.1/all";
  const { data: countries, loading } = useFetch(baseURL);

  function handleChange(e) {
    const type = e.target.dataset.label;
    const value = e.target.value;

    switch (type) {
      case "search":
        setSearchInput(value);
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
    <main>
      <Form
        searchInput={searchInput}
        activeFilter={activeFilter}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        toggleFilter={toggleFilter}
      />
      {/* <h1>Hello World!</h1> */}

      <div className="Main__country-container">
        {loading
          ? "Fetching data..."
          : countries.map((country) => (
              <Country
                key={country.name.common}
                img={country.flags.png}
                name={country.name.common}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            ))}
      </div>
    </main>
  );
}
