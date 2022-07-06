import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./components/header/Header";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/countries", { replace: true });
  }, [navigate]);

  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
}
