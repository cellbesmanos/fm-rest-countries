import React, { useEffect } from "react";
import useFetch from "../../useFetch";
import Borders from "../../components/borders/Borders";
import "./DetailsContent.css";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

export default function DetailsContent({ id }) {
  const BASE_URL = "https://restcountries.com/v3.1/alpha";
  const FILTER_RESPONSE =
    "fields=name,flags,population,region,subregion,capital,tld,currencies,languages,borders";
  const {
    data: country,
    loading,
    error,
  } = useFetch(`${BASE_URL}/${id}?${FILTER_RESPONSE}`);

  useEffect(() => {
    if (error) {
      throw new Error(error.message);
    }
  }, [error]);

  function extractObject(obj, type) {
    if (type !== "lang" && type !== "curr") {
      throw new Error("Cannot extract object of invalid type.");
    }

    let index = 0;
    let str = "";
    let concat = "";
    for (const key of Object.keys(obj)) {
      if (index === 0) {
        concat = type === "lang" ? obj[key] : obj[key].name;
      } else {
        concat = type === "lang" ? `, ${obj[key]}` : `, ${obj[key].name}`;
      }
      str += concat;
      index++;
    }
    return str;
  }

  return (
    <div>
      {loading ? (
        "Fetching data..."
      ) : (
        <div>
          <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
          <div>
            <p>{country.name.common}</p>
            <p>{country.name.official}</p>
            <p>{country.population.toLocaleString("en-US")}</p>
            <p>{country.region}</p>
            <p>{country.subregion}</p>
            <p>{country.capital}</p>
          </div>
          <div>
            <p>{country.tld}</p>
            <p>{extractObject(country.currencies, "curr")}</p>
            <p>{extractObject(country.languages, "lang")}</p>
          </div>

          <div>
            {country.borders.length > 0 ? (
              <ErrorBoundary>
                <Borders borders={country.borders} />
              </ErrorBoundary>
            ) : (
              "No border countries."
            )}
          </div>
        </div>
      )}
    </div>
  );
}
