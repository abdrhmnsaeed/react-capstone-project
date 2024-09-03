import React from "react";
import HeroPage from "../../component/HeroPage.jsx";
import "../pages/HomePage.css";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";
import NextTo from "../../component/NextToHero.jsx";
import ExploByCate from "../../component/Explore.by.category.jsx";
import ListingByArea from "../../component/Listingbyarea.jsx";
import ClientSays from "../../component/Clientsays.jsx";
import OurServices from "../../component/Ourserv.jsx";
import OurBlogs from "../../component/Ourblogs.jsx";
import FlexiblePrice from "../../component/Flexibleprice.jsx";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { TiSocialFacebook } from "react-icons/ti";
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialDribbble } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMapPin } from "react-icons/hi2";
import { IoMdPlay } from "react-icons/io";
import { BiBuildingHouse } from "react-icons/bi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GiCoffeeMug } from "react-icons/gi";
import { CiDumbbell } from "react-icons/ci";
import { TiShoppingCart } from "react-icons/ti";

import { Link } from "react-router-dom";

//
//
//
//
//

function Homepage() {
  return (
    <div className="wholeHome">
      <HeroPage />
      <section className="positionEvaded">
        <div className="imageHold">
          <div>
            <BiBuildingHouse className="dentical" />
          </div>
          <p>Apartment</p>
        </div>

        <div className="imageHold">
          <div>
            <MdOutlineEventAvailable className="dentical" />
          </div>
          <p>Event</p>
        </div>

        <div className="imageHold">
          <div>
            <Link className="styleLink" to={"/restaurantPage"}>
              {" "}
              <GiCoffeeMug className="dentical" />
            </Link>
          </div>
          <p>Eat & Drink</p>
        </div>
        {/* FIXME */}
        <div className="imageHold">
          <div>
            <TiShoppingCart className="dentical" />
          </div>
          <p>Shop Online</p>
        </div>
        {/* FIXME */}
        <div className="imageHold">
          <div>
            <CiDumbbell className="dentical" />
          </div>
          <p>Fitness</p>
        </div>
      </section>

      <div className="postionArrows">
        <ArrowLongLeftIcon className="arrowlefttt " />
        <section className="displayit maxWidth">
          <div>
            <div className="static">
              <div>
                <h2>Trending Listing</h2>
                <p>A selectiojn of listings verified for quality</p>
              </div>
              <p className="noBreak">
                <span>Explore More</span>
                <span>
                  <ArrowLongRightIcon className=" arrowright" />
                </span>
              </p>
            </div>
          </div>
          <section className="firstreusable">
            <NextTo />
            <NextTo />
            <NextTo />
          </section>
        </section>
        <ArrowLongRightIcon className=" arrowrighttt" />
      </div>

      <section className="displayit">
        <div>
          <div className="static">
            <div>
              <h2>Explore by categories</h2>
              <p>A selection of listings verified for quality</p>
            </div>
            <p className="noBreak">
              <span>Explore More </span>
              <span>
                <ArrowLongRightIcon className="arrowright" />
              </span>
            </p>
          </div>
        </div>
        <div className="firstreusable">
          <ExploByCate />
          <ExploByCate />
          <ExploByCate />
          <ExploByCate />
          <ExploByCate />
          <ExploByCate />
        </div>
      </section>

      <section className="displayit">
        <div>
          <div className="static">
            <div>
              <h2>Listing by area</h2>
              <p>A selection of listings verified for quality</p>
            </div>
            <p className="noBreak">
              <span>Explore More </span>
              <span>
                <ArrowLongRightIcon className="arrowright" />
              </span>
            </p>
          </div>
        </div>
        <div className="firstreusable">
          <ListingByArea />
          <ListingByArea />
          <ListingByArea />
          <ListingByArea />
        </div>
      </section>

      <section className="displayit">
        <div>
          <div className="static">
            <div>
              <h2>Client Says About Us</h2>
              <p>A selection of listings verified for quality</p>
            </div>
            <p className="noBreak">
              <span className="switborder">
                <ArrowLongLeftIcon className="arrowright" />
              </span>
              &nbsp;
              <span className="switborder">
                <ArrowLongRightIcon className="arrowright" />
              </span>
            </p>
          </div>
        </div>
        <div className="firstreusable">
          <ClientSays />
          <ClientSays />
          <ClientSays />
        </div>
      </section>

      <section className="displayit">
        <div>
          <div className="static">
            <div>
              <h2>Our Services</h2>
              <p>A selection of listings verified for quality</p>
            </div>
            <p className="noBreak">
              <span>Explore More </span>
              <span>
                <ArrowLongRightIcon className="arrowright" />
              </span>
            </p>
          </div>
        </div>
        <div className="servix">
          <OurServices />
          <OurServices />
          <OurServices />
        </div>
      </section>

      <section className="displayit">
        <div>
          <div className="static">
            <div>
              <h2>Our Flexible Price Plan</h2>
              <p>A selection of listings verified for quality</p>
            </div>
            <p className="noBreak seeThrough">
              <span>Explore More </span>
              <span>
                <ArrowLongRightIcon className="arrowright" />
              </span>
            </p>
          </div>
        </div>
        <div className="servix">
          <FlexiblePrice />
          <FlexiblePrice />
          <FlexiblePrice />
        </div>
      </section>

      <div className="postionArrows">
        <ArrowLongLeftIcon className="arrowlefttt ourBlogLeft" />

        <section className="displayit maxWidth">
          <div>
            <div className="staticc">
              <div>
                <h2>Our Blog</h2>
                <p>A selection of listings verified for quality</p>
              </div>
              <p className="noBreak">
                <span>Explore More </span>
                <span>
                  <ArrowLongRightIcon className="arrowright" />
                </span>
              </p>
            </div>
          </div>
          <div className="firstreusable">
            <OurBlogs />
            <OurBlogs />
            <OurBlogs />
          </div>
        </section>
        <ArrowLongRightIcon className=" arrowrighttt ourBlogRight" />
      </div>

      <section className="displayit">
        <div>
          <div className="static">
            <figure className="partnerLogo">
              <img
                src="src/images/airbnb.png"
                alt="airbnb"
                width="360"
                height="203"
              />
            </figure>
            <figure className="partnerLogo">
              <img
                src="src/images/zillow-logo.png"
                alt="zillow"
                width="280"
                height="280"
              />
            </figure>
            <figure className="partnerLogo">
              <img
                src="src/images/trulia-logo.png"
                alt="trulia"
                width="400"
                height="300"
              />
            </figure>
            <figure className="partnerLogo">
              <img
                src="src/images/realtor-logo.png"
                alt="realtor"
                width="1024"
                height="350"
              />
            </figure>
            <figure className="partnerLogo">
              <img
                src="src/images/homefinder.jpeg"
                alt="homeF"
                width="2700"
                height="854"
              />
            </figure>
          </div>
        </div>
      </section>

      <section className="displayfoot">
        <div className="fwidth">
          <sections className="essentialD1">
            <article>
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <span>
                    <IoMdPlay />
                  </span>
                  <span> Home</span>
                </li>
                <li>
                  <span>
                    <IoMdPlay />
                  </span>
                  <span>Buy Property</span>
                </li>
                <li>
                  <span>
                    <IoMdPlay />
                  </span>
                  <span>Rent an Apartment</span>
                </li>
                <li>
                  <span>
                    <IoMdPlay />
                  </span>
                  <span>Sell Property</span>
                </li>
                <li>
                  <span>
                    <IoMdPlay />
                  </span>
                  <span>About Us</span>
                </li>
              </ul>
            </article>

            <article className="noheader">
              <ul>
                <li>
                  <span>
                    <IoMdPlay />
                  </span>
                  <span>List of Property</span>
                </li>
                <li>
                  <span>
                    <IoMdPlay />
                  </span>
                  <span>Help</span>
                </li>
                <li>
                  <span>
                    <IoMdPlay />
                  </span>
                  <span>FAQs</span>
                </li>
                <li>
                  <span>
                    <IoMdPlay />
                  </span>
                  <span>Terms & Conditions</span>
                </li>
                <li>
                  <span>
                    <IoMdPlay />
                  </span>
                  <span>Privacy Policy</span>
                </li>
              </ul>
            </article>

            <article>
              <h4>Contact Information</h4>
              <ul>
                <li>
                  <span>
                    <HiMapPin className="messag" />
                  </span>
                  123, Burdin St. Newyork, USA.
                </li>
                <li>
                  <span>
                    <FaPhoneAlt className="messag" />
                  </span>
                  +(123) 014 235 456
                </li>
                <li>
                  <span>
                    <MdOutlineMail className="messag" />
                  </span>
                  <span>accommo@info.com</span>
                </li>
                <li>
                  <span>
                    <SlGlobe className="messag" />
                  </span>
                  <span>info@accomo.com</span>
                </li>
                <li>
                  <span>
                    <SlGlobe className="messag" />
                  </span>
                  <span>www.ui-lib.com</span>
                </li>
              </ul>
            </article>

            <article className="newsletter">
              <div>
                <h2>Suscribe Our Newsletter</h2>
                <p>Get important update to your email.</p>
              </div>
              <div className="newsLettinput">
                <span>
                  <MdOutlineMail className="messag" />
                </span>
                <input type="email" placeholder="Enter your email" />
                <button className="">Suscribe</button>
              </div>
            </article>
          </sections>
          <sections className="essentialD2">
            <div>
              <p>Copyright@UI-Lib 2022. All rights reserved</p>
            </div>
            <div className="socialsIcon">
              <span>
                <TiSocialTwitter className="moderateZ" />
              </span>
              <span>
                <TiSocialLinkedin className="moderateZ circ" />
              </span>
              <span>
                <TiSocialFacebook className="moderateZ circ fiftyP" />
              </span>
              <span>
                <SlSocialGithub className="moderateZz circ fiftyP" />
              </span>
              <span>
                <SlSocialDribbble className="moderateZz" />
              </span>
            </div>
          </sections>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
