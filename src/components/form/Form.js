import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form>
      <div>
        <button type="submit" aria-label="search">
          Search icon
        </button>
        <input type="text" placeholder="Enter country name..." />
      </div>

      <div>
        <button type="button">Dropdown</button>

        <ul>
          <li>
            <button type="button">region 1</button>
          </li>
          <li>
            <button type="button">region 2</button>
          </li>
          <li>
            <button type="button">region 3</button>
          </li>
          <li>
            <button type="button">region 4</button>
          </li>
          <li>
            <button type="button">region 5</button>
          </li>
          <li>
            <button type="button">region 6</button>
          </li>
        </ul>
      </div>
    </form>
  );
}
