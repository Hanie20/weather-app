import React from "react";

import "./Button.css";
export default function Button() {
  return (
    <div className="Button">
      <div className="form-group">
        <form>
          <input type="text" placeholder="Enter a city " className="city" />
          <input
            type="submit"
            value="Search"
            className="submitButton"
            autocomplete="off"
          />
          <input type="submit"  value="Current" className="current"/>
        </form>
      </div>
    </div>
  );
}
