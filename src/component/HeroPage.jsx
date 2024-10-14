import React from "react";
import NavBar from "./NavBar.jsx";
import "./HeroPage.css";
import { AcademicCapIcon } from "@heroicons/react/24/solid";

function HeroPage() {
  return (
    <div className="landingP">
      <NavBar />

      <section className="middleText">
        <section>
          <h1>Find Anything Nearby</h1>
          <p>The best way to find yourself in the service of others.</p>
        </section>

        <form action="#" className="form">
          <div className="selectHolder">
            <div>
              <select className="filterS" name="" id="num1">
                <option value="space">Categories</option>
              </select>
            </div>
            <div>
              <select className="filterS" name="" id="num2">
                <option value="space">Location</option>
              </select>
            </div>
            <div>
              <select className="filterS" name="" id="num3">
                <option value="space">
                  <option value="space">Price Range</option>
                </option>
              </select>
            </div>
          </div>
          <div className="containButt">
            <button>Search</button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default HeroPage;
