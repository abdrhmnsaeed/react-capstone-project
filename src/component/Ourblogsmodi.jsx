import React from "react";
import "../component/Ourblogs.css";
import { BiMessageDetail } from "react-icons/bi";
import { LuShare2 } from "react-icons/lu";
import Events from "../../src/images/events.jpg";

function OurBlogsModi() {
  return (
    <div className="blogscontainmodi">
      <figure className="donablogimg">
        <img src={Events} alt="blogImg" width="1920" height="1280" />
      </figure>

      <div>
        <section>
          <h3>Musical Event in New York</h3>
          <p>
            You will be wowed in awe of some of our best offers. Explore some of
            the best tips from around the world from our partners.
          </p>
        </section>

        <section className="blgbgimg">
          <p>22 Feb 2022</p>
          <div>
            <p>
              <span className="blogmartp">
                <BiMessageDetail className="kumushare" />
              </span>
              <span>245</span>
            </p>
            <p>
              <span className="blogmartp">
                <LuShare2 className="kumushare" />
              </span>
              <span>245</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default OurBlogsModi;
