import React from "react";
import "./Countries.css";
import useFetch from "../../useFetch";
import Country from "../../components/country/Country";
import CountryList from "../../components/countryList/CountryList";
import Form from "../../components/form/Form";

export default function Countries() {
  const baseURL = "https://restcountries.com/v3.1";
  const responseFilter = "fields=name,flags,population,region,capital";
  const { data: countries, loading } = useFetch(
    `${baseURL}/all?${responseFilter}`
  );

  return (
    <main>
      <Form />

      <CountryList>
        <h1>This is the countries container!</h1>
        {loading
          ? "Fetching data..."
          : countries.map((country) => (
              <Country key={country.name.common} name={country.name.common} />
            ))}
      </CountryList>
    </main>
  );
}
