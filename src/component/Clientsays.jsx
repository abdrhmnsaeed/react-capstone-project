import React from "react";
import "../component/Clientsays.css";
import { StarIcon } from "@heroicons/react/24/solid";

function ClientSays() {
  return (
    <div className="containertestimony">
      <section>
        <figure className="figure">
          <img src="" alt="clientele" />
        </figure>
        <div>
          <h3>Tom Lorenty</h3>
          <p>Australia</p>
        </div>
      </section>
      <section>
        <p>
          We cannot close our eyes to possibilities, but rather we will follow
          the sun wherever it goes - shining, conquering and soaring with it.
        </p>
      </section>
      <section>
        <p>
          <span>
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
          </span>
        </p>
      </section>
    </div>
  );
}

export default ClientSays;
