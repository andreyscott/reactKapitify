import React from "react";
import { Link } from "react-router-dom";
import "./sign-up.css";
import "./sign-in.scss"
import SignupForm from "../../components/SignUpForm/SignUpform";
import logo from '../../assets/images/logo.svg'
import image1 from '../../assets/images/image 1.svg'

function SignupScreen() {
  return (
    <div className="signupScreen">
      <div className="signupScreen__header">
        <Link to="/">
          <img
            src={logo}
            alt=""
          />
        </Link>
      </div>
      <div className="input_box">
     
      <img src={image1} className="left" />
      <div className="right">
      <SignupForm />
      </div>
      </div>
    </div>
  );
}

export default SignupScreen;
