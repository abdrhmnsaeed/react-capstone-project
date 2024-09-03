import React from "react";
import "../component/Ourserv.css";
import { BuildingLibraryIcon } from "@heroicons/react/24/solid";
import { SpeakerWaveIcon } from "@heroicons/react/24/solid";

function OurServices() {
  const speaker = SpeakerWaveIcon; /*FIXME*/
  return (
    <div className="containerOurserv">
      <section className="Ourserve">
        <span>
          <BuildingLibraryIcon className="buildi" />
        </span>
      </section>
      <section className="Ourserve">
        <h3 className="h3" id="h3">
          BUY/SELL
        </h3>
        <p>We sell your property at the best prices in the market.</p>
      </section>
      <section className="Ourserve">
        <button className="button">Find Now</button>
      </section>
    </div>
  );
}

export default OurServices;
