import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";


import { TextField } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";


import { auth } from "../../firebase";
import { login } from "../../features/userSlice";
import FormSubmit from "../../components/form-submit/formSubmit";
import Social from "../../components/social-links/social";

import './sign-in.scss'

function LoginScreen() {
  const { register, handleSubmit, watch, errors } = useForm();

  const [passwordShown, setPasswordShown] = useState(false);
  
  const dispatch = useDispatch();

  const onSubmit = ({ email, password }) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signIn">
      <div className="signIn__head">
        <Link to="/">
          {/* <img
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            alt=""
          /> */}
        </Link>
      </div>
      <div className="signIn__center">
      <div className="signIn__info">
          <h1>Log In To kapitify </h1>
          <h5>Don't have an account? <span>Create one for free</span></h5>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="signIn__inputContainera">
            <TextField
           variant="outlined"
              name="email"
              label="Username or Email Address"
              type="email"
              InputLabelProps={{
                style: { color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "400", 
              width: "40ch"} }}
              className="signIn__input"
              inputRef={register({ required: true })}
            />
            {errors.email && (
              <div className="signIn__error">
                <CloseIcon fontSize="small" />
                <span>Enter an email.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signIn__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="space">

          </div>

          <div className="signIn__inputContainer">
            <TextField
              name="password"
              label="Password"
              variant="outlined"
              type={passwordShown ? "text" : "password"}
              InputLabelProps={{
                style: { 
                  color: "rgba(0,0,0,.56)" },
              }}
              InputProps={{ style: { fontWeight: "400",
              width: "40ch" } }}
              className="signIn__input"
              inputRef={register({ required: true })}
            />
            {passwordShown ? (
              <VisibilityOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="signIn__visibilityIcon"
              />
            ) : (
              <VisibilityOffOutlinedIcon
                onClick={() => setPasswordShown(!passwordShown)}
                className="signIn__visibilityIcon"
              />
            )}
            {errors.password && (
              <div className="signIn__error">
                <CloseIcon fontSize="small" />
                <span>Enter an password.</span>
                <ReportProblemRoundedIcon
                  fontSize="small"
                  className="signIn__reportIcon"
                />
              </div>
            )}
          </div>
          <div className="signIn__resetLink">
            <p>Forgot  password?</p>
          </div>
          <FormSubmit name="Sign in" type="submit" />
        </form>
        <div className="signIn__socials">
   <Social />
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;