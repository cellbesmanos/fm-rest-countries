import React, { useState } from "react";
import "./Countries.css";
import CountryList from "../../components/countryList/CountryList";
import Form from "../../components/form/Form";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import { sanitize } from "../../helper-functions";

export default function Countries() {
  const BASE_URL = "https://restcountries.com/v3.1";
  const FILTER_RESPONSE = "fields=name,cca3,flags,population,region,capital";

  const [url, setURL] = useState(`${BASE_URL}/all?${FILTER_RESPONSE}`);
  const [searchInput, setSearchInput] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  function refetchAll() {
    setURL(`${BASE_URL}/all?${FILTER_RESPONSE}`);
  }

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

  function handleSubmit(e) {
    e.preventDefault();

    if (!searchInput) {
      refetchAll();
      return;
    }

    setURL(`${BASE_URL}/name/${sanitize(searchInput)}?${FILTER_RESPONSE}`);
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

      <ErrorBoundary>
        <CountryList url={url} activeFilter={activeFilter} />
      </ErrorBoundary>
    </main>
  );
}
