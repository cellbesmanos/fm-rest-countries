import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";
import "./Border.css";

export default function Border({ countryCode }) {
  const BASE_URL = "https://restcountries.com/v3.1/alpha";
  const FILTER_RESPONSE = "fields=name";
  const {
    data: country,
    loading,
    error,
  } = useFetch(`${BASE_URL}/${countryCode}?${FILTER_RESPONSE}`);

  useEffect(() => {
    if (error) {
      throw new Error(error.message);
    }
  }, [error]);

  return loading ? null : (
    <Link className="Border" to={`/country/${countryCode}`}>
      {country.name.common}
    </Link>
  );
}
