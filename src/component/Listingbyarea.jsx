import React from "react";
import "../component/Listingbyarea.css";
import { MapPinIcon } from "@heroicons/react/24/solid";

function ListingByArea() {
  return (
    <div className="containers">
      <section className="inners">
        <div className="empty">&nbsp;</div>
        <section>
          <article>
            <MapPinIcon className="mapicon" />
          </article>
          <div>
            <h3>New York</h3>
            <p>
              <span>35</span> Listing Available
            </p>
          </div>
        </section>
      </section>
    </div>
  );
}

export default ListingByArea;
