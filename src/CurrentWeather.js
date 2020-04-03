import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  return (
    <div className="container">
      <div className="currentWeatherInfo">
        <div className="row">
          <div className="card-group">
            <div className="card image">
              <img
                src="media/icons/all.png"
                className="card-img"
                id="weatherIcon"
                alt="all Icons"
              />
              <div className="card-body">
                <h5 className="card-title text-center" id="description">
                  Ready?
                </h5>
              </div>
            </div>
            <div className="card text-center notepad">
              <div className="card-body">
                <div className="card-title">
                  <span>
                    <button id="C-converter">C</button>
                    <button id="F-converter">F</button>
                  </span>
                  <ul className="weatherParameter">
                    <li>
                      Temperature: <span id="temp-value">?ºC</span>
                    </li>
                    <li>
                      Humidity: <span id="humid-value">?%</span>
                    </li>
                    <li>
                      Wind: <span id="wind-values">?m/s</span>
                    </li>
                  </ul>
                </div>
                <span id="feelTemp">
                  <h4>Feels like:</h4>
                </span>
                <span id="feelTemp-value">
                  <h4>?ºC</h4>
                </span>
              </div>
              <div className="card-body text-center" id="natureDay">
                <p className="card-title">
                  {" "}
                  Always a good time to plant a tree!
                </p>
              </div>
            </div>
            <div className="card image">
              <img src="media/tree.png" id="natureIcon" alt="tree" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
