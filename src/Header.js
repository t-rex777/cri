import React from "react";
import logo from "./asserts/logo.png";
import trophy from "./asserts/1.png";
import photograph from "./asserts/2.png";

function Header() {
  return (
    <div>
      <img src={logo} className="logo" alt="logo"  />
      <header className="App-header">
        <div className="left">
          <img src={trophy} alt="trophy" className="trophy" />
        </div>
        <div className="right">
          <p className="bold">
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </p>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src={photograph} alt="photograph" className="photograph" />

          <div style={{ display: "flex" }}>
            <p>
              Government of India has awarded the
              <strong className="bold">
                "National Energy Conservation Award 2018".{" "}
              </strong>
              Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received
              the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri.
              Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
