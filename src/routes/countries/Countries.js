import React, { useState } from "react";
import "./Countries.css";

import CountryList from "../../components/countryList/CountryList";
import Form from "../../components/form/Form";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";

export default function Countries() {
  const BASE_URL = "https://restcountries.com/v3.1";
  const FILTER_RESPONSE = "fields=name,cca3,flags,population,region,capital";

  const [url, setURL] = useState(`${BASE_URL}/all?${FILTER_RESPONSE}`);

  return (
    <main>
      <Form />

      <ErrorBoundary>
        <CountryList url={url} />
      </ErrorBoundary>
    </main>
  );
}
