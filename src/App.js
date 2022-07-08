import React from "react";
<<<<<<< HEAD
import Header from "./components/header/Header";
import Main from "./containers/main/Main";

export default function App() {
  return (
    <>
      <Header />

      <Main />
    </>
=======
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
>>>>>>> redo
  );
}
