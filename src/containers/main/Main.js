import React from "react";
import Country from "../../components/country/Country";
import Form from "../../components/form/Form";
import "./Main.css";

export default function Main() {
  return (
    <main>
      <Form />
      {/* <h1>Hello World!</h1> */}

      <div className="Main__country-container">
        <Country />
        <Country />
        <Country />
        <Country />
        <Country />
      </div>
    </main>
  );
}
