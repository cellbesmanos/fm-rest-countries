import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";
import Country from "../../components/country/Country";
import Spinner from "../../components/spinner/Spinner";
import "./CountryList.css";

function CountryList({ url, activeFilter }) {
  const { data: countries, loading, error } = useFetch(url);

  useEffect(() => {
    if (error) {
      throw new Error(error.message);
    }
  }, [error]);

  function renderCountry(cca3, img, name, population, region, capital) {
    return (
      <Link key={cca3} to={`/country/${cca3}`}>
        <Country
          img={img}
          name={name}
          population={population}
          region={region}
          capital={capital}
        />
      </Link>
    );
  }

  let content;

  if (loading) {
    content = <Spinner />;
  } else {
    content = countries
      .sort((curr, prev) => curr.name.official > prev.name.official)
      .filter((country) => {
        if (!activeFilter) {
          return country;
        } else {
          return country.region === activeFilter;
        }
      })
      .map((country) =>
        renderCountry(
          country.cca3,
          country.flags.png,
          country.name.common,
          country.population,
          country.region,
          country.capital
        )
      );
  }

  return (
    <div className="CountryList">
      {content.length === 0 ? (
        <p>There is nothing in here. Try using a different keyword.</p>
      ) : (
        content
      )}
    </div>
  );
}

export default React.memo(CountryList);
