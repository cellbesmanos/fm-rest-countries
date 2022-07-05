import React, { useState } from "react";
import Country from "../../components/country/Country";
import Form from "../../components/form/Form";
import "./Main.css";
import useFetch from "../../useFetch";

export default function Main() {
  const [searchInput, setSearchInput] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const baseURL = "https://restcountries.com/v3.1";
  const responseFilter = "fields=name,flags,population,region,capital";
  const [url, setURL] = useState(`${baseURL}/all`);
  const { data: countries, loading } = useFetch(url);

  function handleChange(e) {
    const type = e.target.dataset.label;
    const value = e.target.value;

    switch (type) {
      case "search":
        setSearchInput(value);

        if (!value) {
          refetchAll();
        }

        break;
      default:
        throw new Error("Invalid form type.");
    }
  }

  function refetchAll() {
    setURL(`${baseURL}/all?${responseFilter}`);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchInput) {
      return;
    }

    setURL(`${baseURL}/name/${searchInput}?${responseFilter}`);
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

  function renderCountry(key, img, name, population, region, capital) {
    return (
      <Country
        key={key}
        img={img}
        name={name}
        population={population}
        region={region}
        capital={capital}
      />
    );
  }

  let content;

  if (loading) {
    content = <p>Fetching countries...</p>;
  } else {
    content = countries
      .filter((country) => {
        if (!activeFilter) {
          return country;
        } else {
          return country.region === activeFilter;
        }
      })
      .map((country) =>
        renderCountry(
          country.name.common,
          country.flags.png,
          country.name.common,
          country.population,
          country.region,
          country.capital
        )
      );
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
        {content.length === 0 ? (
          <p>There is nothing in here. Try using a different keyword.</p>
        ) : (
          content
        )}
      </div>
    </main>
  );
}
