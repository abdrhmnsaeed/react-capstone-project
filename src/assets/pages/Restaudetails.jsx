import React from "react";
import NavBar from "../../component/NavBar";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";
import "../pages/Restaudetails.css";
import { LuPlus } from "react-icons/lu";

function RestauDetails() {
  return (
    <div className="Scontant">
      <NavBar />

      <div className="postionArrowss">
        <ArrowLongLeftIcon className="arrowleftth " />
        {/* <section className="displayit maxWidth">
          <div>
            <div className="static">
              <div>
                <h2>Trending Listing</h2>
                <p>A selectiojn of listings verified for quality</p>
              </div>
              <p className="noBreak">
                <span>Explore More</span>
              </p>
            </div>
          </div>
          <section className="firstreusable">


          </section>
        </section> */}
        <div className="detailsFirst">&nbsp;</div>
        <div className="detailsFirst2">&nbsp;</div>
        <div className="detailsFirst3">
          <div>
            <LuPlus className="plusIcond" />
          </div>
        </div>
        <div className="detailsFirst4">&nbsp;</div>
        <ArrowLongRightIcon className=" arrowrightth" />
      </div>
    </div>
  );
}

export default RestauDetails;
