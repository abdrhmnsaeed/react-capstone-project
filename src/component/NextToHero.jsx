import React from "react";
import {
  CalendarIcon,
  CheckBadgeIcon,
  StarIcon,
  ArrowPathIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import "../component/NextToHero.css";

function NextTo() {
  return (
    <div className="ntcontainer">
      <section className="firstSec">
        <p className="pmarginB">
          <span>
            <CalendarIcon className="calend" />
          </span>
          <span>Instant Booking</span>
        </p>
        <div>
          <p className="coachin">Coaching</p>
          <h3>
            <span className="h3span"> Liam Ancor - Physics Trainee</span>
            <span>
              <CheckBadgeIcon className="badge" />
            </span>
          </h3>
          <p>
            <span>New York</span>, USA
          </p>
        </div>
      </section>
      <section className="secondSec">
        <p className="genericCenter">
          <span>
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
            <StarIcon className="star" />
          </span>
          <span className="darknBold">4.5</span>
          <span className="dark">(56 reviews)</span>
        </p>
        <p className="genericCenter">
          <span>
            <ArrowPathIcon className="arrowp" />
          </span>
          <span>
            <HeartIcon className="heart" />
          </span>
        </p>
      </section>
    </div>
  );
}

export default NextTo;
