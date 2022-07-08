import React from "react";
import { Link, useParams } from "react-router-dom";
import DetailsContent from "../../components/detailsContent/DetailsContent";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import back from "../../assets/arrow-back-outline.svg";

import "./Details.css";

export default function Details() {
  const { id } = useParams();

  return (
    <main>
      <Link to="/" className="Details__back">
        <img src={back} alt="back logo" aria-hidden="true" />
        Back
      </Link>
      <div>Details</div>

      <ErrorBoundary>
        <DetailsContent id={id} />
      </ErrorBoundary>
    </main>
  );
}
