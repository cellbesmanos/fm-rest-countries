import React from "react";
import "./Countries.css";
import useFetch from "../../useFetch";
import Country from "../../components/country/Country";

export default function Countries() {
  const baseURL = "https://restcountries.com/v3.1";
  const responseFilter = "fields=name,flags,population,region,capital";
  const { data: countries, loading } = useFetch(
    `${baseURL}/all?${responseFilter}`
  );

  return (
    <div>
      <h1>This is the countries container!</h1>
      {loading
        ? "Fetching data..."
        : countries.map((country) => (
            <Country key={country.name.common} name={country.name.common} />
          ))}
    </div>
  );
}
