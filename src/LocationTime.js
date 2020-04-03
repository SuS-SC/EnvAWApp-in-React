import React from "react";
import "./LocationTime.css";

export default function LocationTime() {
  return (
    <div className="card locationTime">
      <div className="container">
        <div className="row">
          <div className="col" id="location">
            <h3> Where?</h3>
          </div>
          <span>
            <img src="media/blue-pin_640.png" className="pin1" alt="blue pin" />{" "}
          </span>
          <div className="w-100" />
          <span>
            {" "}
            <img
              src="media/blue-pin_640.png"
              className="pin2"
              alt="blue pin"
            />{" "}
          </span>
          <div className="col" id="currentdate">
            <h5 id="current-date">Thursday, 12 March 2020 12:00</h5>
          </div>
        </div>
        <div className="w-100" />
      </div>
    </div>
  );
}
