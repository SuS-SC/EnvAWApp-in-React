import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerWrapper">
      <footer>
        <span id="EnvAWAp">Environment Awareness Weather App </span> <br />
        <a href="https://github.com/SuS-SC/EnvAWApp" target="blank">
          {" "}
          Open-source code
        </a>{" "}
        by Susana Soares for{" "}
        <a href="https://www.shecodes.io/plus" target="blank">
          SheCodes Plus
        </a>
      </footer>
    </div>
  );
}
