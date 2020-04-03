import React from "react";
import Footer from "./Footer";
import "./Search.css";

export default function Search() {
  return (
    <div className="col-auto">
      <div className="searchBar">
        <div className="card width-auto">
          <form id="city-form">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <img
                    src="media/keyboard_1280.png"
                    width="35px"
                    alt="keyboard"
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                id="inlineFormInputGroup"
                placeholder="Type another city"
              />
              <button
                type="submit"
                className="btn btn-outline-success"
                id="city-button"
              >
                <img
                  src="media/glass_1280.png"
                  width="20px"
                  alt="magnifing glass"
                />
              </button>
              <br />
              <button
                type="click"
                className="btn btn-outline-success"
                id="current-location"
              >
                <img src="media/tracker_1280.png" width="15px" alt="tracker" />
              </button>
            </div>
          </form>
        </div>
        <br />
        <Footer />
      </div>
    </div>
  );
}
