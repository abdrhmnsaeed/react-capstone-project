import React from "react";
import { UserIcon, CheckIcon } from "@heroicons/react/24/solid";
import "../component/Flexibleprice.css";

function FlexiblePrice() {
  return (
    <div className="flexiContain">
      <figure>
        <UserIcon className="usericon" />
      </figure>
      <h2>Basic</h2>
      <section>
        <div>
          <CheckIcon className="checked" />
        </div>
        <div>
          <p>Unlimited number of listings</p>
        </div>
      </section>
      <section>
        <div>
          <CheckIcon className="checked" />
        </div>
        <div>
          <p>Unlimited availability of listings</p>
        </div>
      </section>
      <section>
        <div>
          <CheckIcon className="checked" />
        </div>
        <div>
          <p>Limited Support</p>
        </div>
      </section>
      <h2>
        $40 <span>/month</span>
      </h2>
      <div className="butti">
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default FlexiblePrice;
