import React, { useEffect } from "react";
import useFetch from "../../useFetch";
import Borders from "../../components/borders/Borders";
import "./DetailsContent.css";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import { toProper } from "../../helper-functions";
import Spinner from "../spinner/Spinner";

function DetailsContent({ id }) {
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
      str += toProper(concat);
      index++;
    }
    return str;
  }

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <article className="DetailsContent">
          <div className="DetailsContent__img">
            <img
              src={country.flags.svg}
              alt={`flag of ${country.name.common}`}
            />
          </div>

          <div className="DetailsContent__text">
            <h1>{toProper(country.name.common)}</h1>

            <div className="DetailsContent__stats">
              <div>
                <p>
                  Official Name: <span>{toProper(country.name.official)}</span>
                </p>
                <p>
                  Population:
                  <span>
                    {toProper(country.population.toLocaleString("en-US"))}
                  </span>
                </p>
                <p>
                  Region: <span>{toProper(country.region)}</span>
                </p>
                <p>
                  Sub Region:{" "}
                  <span>
                    {country.subregion ? toProper(country.subregion) : "N/A"}
                  </span>
                </p>
                <p>
                  Capital:{" "}
                  <span>
                    {country.subregion ? toProper(country.capital) : "N/A"}
                  </span>
                </p>
              </div>
              <div>
                <p>
                  Top Level Domain: <span>{toProper(country.tld)}</span>
                </p>
                <p>
                  Currencies:{" "}
                  <span>{extractObject(country.currencies, "curr")}</span>
                </p>
                <p>
                  Languages:{" "}
                  <span>{extractObject(country.languages, "lang")}</span>
                </p>
              </div>
            </div>

            {country.borders.length > 0 ? (
              <ErrorBoundary>
                <Borders borders={country.borders} />
              </ErrorBoundary>
            ) : (
              "No border countries."
            )}
          </div>
        </article>
      )}
    </>
  );
}

export default React.memo(DetailsContent);
