import React from "react";
import LocationTime from "./LocationTime";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weatherAppWrapper">
          <div className="weatherApp">
            <LocationTime />
            <br />
            <CurrentWeather />
            <br />
            <Forecast />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}
