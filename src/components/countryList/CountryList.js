import { useEffect } from "react";
import { Link } from "react-router-dom";
import Country from "../../components/country/Country";
import useFetch from "../../useFetch";

export default function CountryList({ url }) {
  const { data: countries, loading, error } = useFetch(url);

  useEffect(() => {
    if (error) {
      throw new Error(error.message);
    }
  }, [error]);
  return (
    <>
      <h1>This is the countries container!</h1>
      {loading
        ? "Fetching data..."
        : countries.map((country) => (
            <Link key={country.name.common} to={`/country/${country.cca3}`}>
              <Country name={country.name.common} />
            </Link>
          ))}
    </>
  );
}
