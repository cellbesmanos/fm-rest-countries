import React, { useState } from "react";
import "./Countries.css";

import CountryList from "../../components/countryList/CountryList";
import Form from "../../components/form/Form";

export default function Countries() {
  const baseURL = "https://restcountries.com/v3.1";
  const responseFilter = "fields=name,cca3,flags,population,region,capital";

  const [url, setURL] = useState(`${baseURL}/all?${responseFilter}`);

  return (
    <main>
      <Form />

      <CountryList url={url} />
    </main>
  );
}
