import React from "react";
import { Link, useParams } from "react-router-dom";

import DetailsContent from "../../components/detailsContent/DetailsContent";

import "./Details.css";

export default function Details() {
  const { id } = useParams();

  return (
    <div>
      <Link to="/">Back</Link>
      <div>Details</div>

      <DetailsContent id={id} />
    </div>
  );
}
