import React from "react";
import NavBar from "../../component/NavBar.jsx";
import "../pages/Restaurantpage.css";
import {
  ArrowLongRightIcon,
  ArrowLongLeftIcon,
} from "@heroicons/react/24/solid";
import NextTo from "../../component/NextToHero.jsx";
import ExploByCate from "../../component/Explore.by.category.jsx";
import ListingByArea from "../../component/Listingbyarea.jsx";
import ClientSaysInv from "../../component/Clientsaysinv.jsx";
import OurBlogsModi from "../../component/Ourblogsmodi.jsx";
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
import { FaCrown } from "react-icons/fa6";
import { FaRegFaceSmileBeam } from "react-icons/fa6";
import { FaAward } from "react-icons/fa6";
import { Link } from "react-router-dom";

//
//
//
//
//
function RestaurantPage() {
  return (
    <div className="wholeHome">
      <section className="replacedHeroP">
        <NavBar />
        <form action="#" className="formRestau">
          <section>
            <h2>Find Nearby Restaurant</h2>
            <p>The best way to find yourself in the service of others</p>
          </section>
          <section className="restausec2">
            <div className=" restaupadd">
              <input
                type="text"
                className="restaublk"
                placeholder="What are you looking for?"
                autoFocus
              />
            </div>
            <div className=" restaupadd">
              <select className="restaublk" name="foodfilter" id="foodfilter">
                <option value="allC">All Category</option>
              </select>
            </div>
            <div className="formLocate restaupadd">
              <input type="text" className="restaublk" placeholder="Location" />
              <HiMapPin className="formLocateIcon" />
            </div>
            <div>
              <Link to={"/Restaurants"}>
                <button className="restaubutt restaublk">Search</button>
              </Link>
            </div>
          </section>
          <section className="restauLast">
            <p>Popular Categories</p>
            <div>
              <span>Chinese</span>
              <span>Italian</span>
              <span>Thai</span>
              <span>Indian</span>
            </div>
          </section>
        </form>
      </section>

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

      <div className="postionArrows">
        <ArrowLongLeftIcon className="arrowlefttt " />
        <section className="displayit maxWidth">
          <div>
            <div className="static">
              <div>
                <h2>Trending Listing</h2>
                <p>A selection of listings verified for quality</p>
              </div>
              <p className="noBreak">
                <span>Explore More</span>
                <span>
                  <ArrowLongRightIcon className=" arrowright" />
                </span>
              </p>
            </div>
          </div>

          <section className="firstreusablegap">
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
          <ClientSaysInv />
          <ClientSaysInv />
          <ClientSaysInv />
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
            <OurBlogsModi />
            <OurBlogsModi />
            <OurBlogsModi />
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

      <section className="iconsection firstreusable">
        <div>
          <div>
            <span id="cutio1">
              <FaCrown className="cutiucon" />
            </span>
          </div>
          <div>
            <div className="healh2">
              <article>10K</article>
              <article>+</article>
            </div>
            <p>Listing</p>
          </div>
        </div>

        <div>
          <div>
            <span id="cutio2">
              <FaRegFaceSmileBeam className="cutiucon" />
            </span>
          </div>
          <div>
            <div className="healh2">
              <article>5K</article>
              <article>+</article>
            </div>
            <p>Happy Customers</p>
          </div>
        </div>

        <div>
          <div>
            <span id="cutio3">
              <FaAward className="cutiucon" />
            </span>
          </div>
          <div>
            <div className="healh2">
              <article>20</article>
              <article>+</article>
            </div>
            <p>International Awards</p>
          </div>
        </div>

        <div>
          <div>
            <span id="cutio4">
              <FaCrown className="cutiucon" />
            </span>
          </div>
          <div>
            <div className="healh2">
              <article>10</article>
              <article>+</article>
            </div>
            <p>Years of Experience</p>
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

export default RestaurantPage;
