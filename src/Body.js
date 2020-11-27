import React from "react";
import pumps from "./asserts/3.png";
import Line from "./Line";

function Body() {
  return (
    <div>
      <p style={{ marginLeft: "1%" }}>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <img src={pumps} alt="pumps" className="pumps" />
      <p className="info">
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors
      </p>
      <hr />
      <div>
        <p className="info bold">
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </p>
        <p className="info">
          CHEMICALS & PROCESS <Line />
          POWER <Line />
          WATER & WASTE WATER <Line />
          OILS & GAS <Line />
          PHARMA SUGARS & DISTILLERIES <Line />
          PAPER & PULP <Line />
          MARINE & DEFENCE <Line />
          METAL & MINING <Line />
          FOOD & BEVERAGE <Line />
          PETROCHEMICAL & REFINERIES <Line />
          SOLAR <Line />
          BUILDING <Line />
          HVAC <Line />
          FIRE FIGHTING <Line />
          AGRICULTURE & RESIDENTIAL
        </p>
      </div>
    </div>
  );
}

export default Body;
