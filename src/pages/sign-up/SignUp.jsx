import React from "react";
import { Link } from "react-router-dom";
import "./sign-in.scss"
import SignupForm from "../../components/SignUpForm/SignUpform";
import logo from '../../assets/images/Group7.svg'
import image1 from '../../assets/images/image 1.svg'

function SignupScreen() {
  return (
    <div className="signupScreen">
      <div className="signupScreen__header">
        <Link to="/">
          <img
            src={logo}
            alt=""
            className="signupScreen__header__logo"
          />
        </Link>
      </div>
      <div className="input_box">
     
      <div className="right">
      <SignupForm />
      <img src={image1} style={{
        width: '100%',
        height: '40vh',
      }} className="left" />
      </div>
      </div>
    </div>
  );
}

export default SignupScreen;
