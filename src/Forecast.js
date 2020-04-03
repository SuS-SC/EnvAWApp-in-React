import React from "react";
import Search from "./Search";
import "./Forecast.css";
import ladybug_1280 from "./media/ladybug_1280.png";
import flowerorange_640 from "./media/flowerorange_640.png";
import flowerred_640 from "./media/flowerred_640.png";
import flowerviolet_640 from "./media/flowerviolet_640.png";
import flowerwhite_640 from "./media/flowerwhite_640.png";
import floweryellow_640 from "./media/floweryellow_640.png";

export default function Forecast() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5 className="nextDays">
            {" "}
            <img
              src={ladybug_1280}
              className="ladybugIcon"
              width="30px"
              alt="lady bug"
            />
            Next days:{" "}
          </h5>
        </div>
        <div className="row w-100" />
        <div className="card-deck">
          <div className="card width-auto">
            <img
              src={flowerred_640}
              id="forecast1"
              className="card-img-top"
              alt="red flower"
            />
            <div className="card-body">
              <h6 className="card-title text-center" id="today">
                Thu
              </h6>
            </div>
          </div>
          <div className="card width-auto">
            <img
              src={flowerorange_640}
              id="forecast2"
              className="card-img-top"
              alt="orange flower"
            />
            <div className="card-body">
              <h6 className="card-title text-center" id="tomorrow">
                Fri
              </h6>
            </div>
          </div>
          <div className="card width-auto">
            <img
              src={flowerwhite_640}
              id="forecast3"
              className="card-img-top"
              alt="white flower"
            />
            <div className="card-body">
              <h6 className="card-title text-center" id="second-day">
                Sat
              </h6>
            </div>
          </div>
          <div className="card width-auto">
            <img
              src={flowerviolet_640}
              id="forecast4"
              className="card-img-top"
              alt="violet flower"
            />
            <div className="card-body">
              <h6 className="card-title text-center" id="third-day">
                Sun
              </h6>
            </div>
          </div>
          <div className="card width-auto">
            <img
              src={floweryellow_640}
              id="forecast5"
              className="card-img-top"
              alt="yellow flower"
            />
            <div className="card-body">
              <h6 className="card-title text-center" id="forth-day">
                Mon
              </h6>
            </div>
          </div>

          <Search />
        </div>
      </div>
    </div>
  );
}
