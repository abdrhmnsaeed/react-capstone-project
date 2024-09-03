import React from "react";
import "../component/NavBar.css";
import { BellAlertIcon } from "@heroicons/react/24/solid";
import Logobott from "/src/images/robot.jpg";

function NavBar() {
  return (
    <nav>
      <figure className="logoHolder">
        <img src="src/images/robot.jpg" alt="Logo" width="640" height="427" />
        <figcaption></figcaption>
      </figure>

      <div>
        <ul className="navul1">
          <li className="first">Home</li>
          <li>
            <select name="listingsSelect" id="listsS">
              <option value="listings">Listings</option>
            </select>
          </li>
          <li>
            <select name="pagesSelect" id="pagesS">
              <option value="pages">Pages</option>
            </select>
          </li>
          <li>Blogs</li>
        </ul>
        <ul className="navul2">
          <li>
            <span className="noBreak encirclebell">
              <BellAlertIcon className="icon" />
              <sup> 2</sup>
            </span>
          </li>
          <li>
            <span className="noBreak firmpp">
              <img src={Logobott} alt="user" width="640" height="427" />
            </span>
          </li>
          <li>
            <span className="noBreak">My Account</span>
          </li>
          <li>
            <button className="navbutton">
              <span className="noBreak">
                <span>+</span> Add Listing
              </span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
