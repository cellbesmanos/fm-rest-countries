import React from "react";
import "./Country.css";

function Country({ name }) {
  return <div>{name}</div>;
}

export default React.memo(Country);
