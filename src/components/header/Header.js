import React, { useState } from "react";
import "./Header.css";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="Header">
      <p className="Header__logo">Where in the world?</p>

      <div className="Header__controls">
        <button
          className="Header__toggle"
          type="button"
          role="switch"
          aria-label="dark mode toggle"
          aria-checked={isDarkMode}
          onClick={() => setIsDarkMode((prev) => !prev)}
        ></button>

        <p>Dark Mode</p>
      </div>
    </header>
  );
}
