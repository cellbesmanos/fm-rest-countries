import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../useFetch";
import "./Border.css";

export default function Border({ countryCode }) {
  const baseURL = "https://restcountries.com/v3.1/alpha";
  const responseFilter = "fields=name";
  const { data: country, loading } = useFetch(
    `${baseURL}/${countryCode}?${responseFilter}`
  );

  return loading ? null : (
    <Link to={`/country/${countryCode}`}>{country.name.common}</Link>
  );
}
