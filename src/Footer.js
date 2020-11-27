import React from "react";
import phone from "./asserts/phone.svg";
import facebook from "./asserts/facebook.svg";
import globe from "./asserts/global.svg";

function Footer() {
  return (
    <footer>
      <span className="foobar">
        <img src={phone} alt="phone" className="icon" />
        <p>Toll free 1800 200 1234</p>
      </span>

      <span className="foobar">
        <img src={facebook} alt="facebook" className="icon" />
        <p>www.facebook.com/cripumps</p>
      </span>
      <span className="foobar">
        <img src={globe} alt="website" className="icon" />
        <p>www.crigroups.com</p>
      </span>
    </footer>
  );
}

export default Footer;
