import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Countries from "./routes/countries/Countries";
import Details from "./routes/details/Details";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route element={<Countries />} index />
        <Route path="/country/:id" element={<Details />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
