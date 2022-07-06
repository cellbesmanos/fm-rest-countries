import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Countries from "./routes/countries/Countries";
import Details from "./routes/details/Details";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/countries" element={<Countries />} index />
          <Route path="/country/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
