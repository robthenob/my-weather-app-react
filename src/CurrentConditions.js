import React from "react";
import "./CurrentConditions.css";

export default function CurrentConditions() {
  return (
    <div className="CurrentConditions">
      <div class="row">
        <div class="col-6" id="temperature">
          <h1>
            <span id="degree">6</span>
            <span>
              <a href="#0" id="unit" class="active">
                °C
              </a>
            </span>
            <span id="bar"> | </span>
            <span>
              <a href="#0" id="fahrenheitUnit">
                °F
              </a>
            </span>
          </h1>
        </div>
        <div class="col-2">
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            alt="weather icon"
            id="icon"
          />
        </div>
        <div class="col-4">
          <ul>
            <li id="currentCondition">Scattered Clouds</li>
            <li>
              Wind: <span id="windSpeed">4</span>
              <span id="km">km/h</span>
            </li>
            <li>
              Humidity: <span id="humidity">95</span>%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
