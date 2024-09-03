import React from "react";
import "../pages/Signuppage.css";
import { FaStarOfLife } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import { BsApple } from "react-icons/bs";
import Signmage from "/src/images/signupLa.jpg";
import Logobot from "/src/images/robot.jpg";
import { Link } from "react-router-dom";

function RegisterUser() {
  return (
    <div className="signinoverall">
      <section className="signincontain signincontainnn">
        <figure className="signupfig signupfigg">
          <img src={Signmage} alt="signpLarg" width="1920" height="2880" />
        </figure>
        {/*  */}
        <section className="signupR signupRR">
          <figure className="signuplogo">
            <img src={Logobot} alt="logo" width="640" height="427" />
            <figcaption>Hello!</figcaption>
          </figure>
          <h3>Register an account</h3>
          <p>
            If you already have an account, please{" "}
            <span className="freqBlR">
              &nbsp;{" "}
              <Link className="styleLink" to={"/"}>
                Sign In
              </Link>
            </span>
          </p>
          {/*  */}
          {/*  */}
          <form>
            {/*  */}
            <div className="radioUserAgt">
              <div>
                <input type="radio" name="seltUser" />
                <p>Agent</p>
              </div>
              <div>
                <input type="radio" name="seltUser" />
                <p>User</p>
              </div>
            </div>
            <div className="signuppass">
              <h4>
                Email{" "}
                <sup>
                  <FaStarOfLife className="signupstar" />
                </sup>
              </h4>
              {/*  */}
              <div className=" signupimp">
                <span>
                  <MdOutlineMail className="supme1" />
                </span>
                <input
                  autoFocus
                  type="email"
                  placeholder="Enter email or username"
                />
              </div>
            </div>
            {/*  */}
            <div className="signuppass">
              <h4>
                Password{" "}
                <sup>
                  <FaStarOfLife className="signupstar" />
                </sup>
              </h4>
              {/*  */}
              <div className=" signupimp">
                <span>
                  <CiLock className="supme1" />
                </span>
                <input type="password" placeholder="Enter your password" />
                <span>
                  <span>
                    <BsEye className="supme1 supme11" />
                  </span>
                  <span>
                    <BsEyeSlash className="supme1" />
                  </span>
                </span>
              </div>
            </div>
            {/*  */}
            <div className="signuppass">
              <h4>
                Re-type password{" "}
                <sup>
                  <FaStarOfLife className="signupstar" />
                </sup>
              </h4>
              {/*  */}
              <div className=" signupimp">
                <span>
                  <CiLock className="supme1" />
                </span>
                <input type="password" placeholder="Enter your password" />
                <span>
                  <span>
                    <BsEye className="supme1 supme11" />
                  </span>
                  <span>
                    <BsEyeSlash className="supme1" />
                  </span>
                </span>
              </div>
            </div>
            {/*  */}
            <div className="signupforgot">
              <div>
                <input id="signchkbx" type="checkbox" />
                <p>Remember me?</p>
              </div>
              <p>Forgot Password?</p>
            </div>
            {/* FIXME */}
            <div className="buttsign">
              <Link className="styleLink" to={"/"}>
                {" "}
                <button type="submit">Sign Up</button>
              </Link>
            </div>
          </form>
          {/*  */}
          {/*  */}
          <section className="alternateSocial">
            <p>OR</p>

            <div>
              <span>
                <FcGoogle className="alternateS" />
              </span>
              <p>Continue with Google</p>
            </div>

            <div>
              <span>
                <MdOutlineFacebook className="alternateS1" />
              </span>
              <p>Continue with Facebook</p>
            </div>

            <div>
              <span>
                <BsApple className="alternateS" />
              </span>
              <p>Continue with Apple</p>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default RegisterUser;
