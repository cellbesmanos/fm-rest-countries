import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="Header">
      <p className="Header__logo">Where in the world?</p>

      <button
        className="Header__toggle"
        type="button"
        role="switch"
        aria-label="dark mode toggle"
        aria-checked="false"
      >
        Dark Mode
      </button>
    </header>
  );
}
