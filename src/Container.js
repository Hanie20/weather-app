import React from "react";
import Button from "./Button";
import Degree from "./Degree";
import Header from "./Header";
import "./Container.css";

export default function Container() {
  return (
    <div className="Container">
      <div className="card">
        <div className="card-body">
          <Button />
          <Header />
          <Degree />
          <ul>
            <li>Humidity: 74 %</li>
            <li>Wind: 1.5 km/h</li>
          </ul>
        </div>
      </div>
      <small className="projectLink">
        <a href="https://github.com/Hanie20/weather-app.git" >Open-source code </a>
        by Johanie Damas
      </small>
    </div>
  );
}
