import React from "react";
import "./Degree.css";

export default function Degree() {
  return (
    <div className="Degree">
      <div className="degree">
        <img
          src="http://openweathermap.org/img/wn/03n@2x.png"
          alt=""
          className="iconImg"
        />
        <span className="temp">12</span>
        <span className="unit">
          <a href="/" className="active">
            °C 
          </a> | <a href="/">°F</a>
        </span>
      </div>
      <br />
    </div>
  );
}
