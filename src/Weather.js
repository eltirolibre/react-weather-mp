import React from "react";
import Weather from "./Weather.css";

export default function weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Search for a city..."
              className="form-control"
            />
          </div>
          <div className="col-6">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>

      <h2>Toronto</h2>
      <ul>
        <li>Monday, 08:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="Partly Cloudy"
              className="float-left"
            />

            <div className="float-left">
              <span className="temp">4</span>
              <span classname="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 50%</li>
            <li>Humidity: 75%</li>
            <li>Wind: 5 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
