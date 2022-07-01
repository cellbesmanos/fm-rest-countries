import React from "react";
import Country from "../../components/country/Country";
import Form from "../../components/form/Form";

export default function Main() {
  return (
    <main>
      <Form />
      <h1>Hello World!</h1>

      <div>
        <Country />
      </div>
    </main>
  );
}
