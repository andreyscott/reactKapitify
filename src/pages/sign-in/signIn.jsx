import React from 'react'
import { useForm } from "react-hook-form";
import {TextField } from '@mui/material/';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import CloseIcon from "@material-ui/icons/Close";
import ReportProblemRoundedIcon from "@material-ui/icons/ReportProblemRounded";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";


import { login } from "../../features/userSlice";
import { auth } from "../../firebase";


import './sign-in.scss'

const  SignInPage = ()  => {

    const {register, handleSubmit, errors} = useForm();

    const [passwordShown, setPasswordShown] = React.useState(false);

    const dispatch = useDispatch();



    const onSubmit = ({  email, password  }) => {
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
    <div className="signInPage">
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="signInPage__inputContainer">
        <TextField id="outlined-basic" 
        label="Outlined" 
        // name="email" 
        type="email" 
        inputLabelProps={{ styles: {  color: "rgba(0,0,0,.56" }}}
        InputProps={{style: { fontWeight: "550"}}}
        className="signInPage__input" 
       {...register("email", {
        required: "Email is required",
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
          message: "invalid email address",
        },
      })}
         />


         {errors.email && ( //<div className="signInPage__error">Email is required</div>
         <div className="signInPage__error"><CloseIcon fontSize="small" />
         <span>Email is required</span>
         <ReportProblemRoundedIcon fontSize="small" 
         className="signInPage__reportIcon"
         />
            </div>
         )}
        </div>
        <div className="signInPage__inputContainer">
        <TextField id="outlined-basic" 
        label="Outlined" 
        variant="outlined" 
        name="password" 
        type={passwordShown ? "text" : "password"}
        inputLabelProps={{ styles: {  color: "rgba(0,0,0,.56" }}}
        InputProps={{style: { fontWeight: "550"}}}
        className="signInPage__input" 
        {...register("password", {
        required: "Password is required",
        minLength: {
          value: 6,
          message: "Password must be at least 6 characters",
        },
      })}
         />
         { passwordShown ? (
                    <VisibilityOutlinedIcon onClick={() => setPasswordShown(!passwordShown)}
                    fontSize="small"
                    className="signInPage__visibilityIcon"
                    />
             ) : ( <VisibilityOffOutlinedIcon onClick={() => setPasswordShown(!passwordShown)}
                    fontSize="small"
                    className="signInPage__visibilityIcon"
                    />
               )  }

         {errors.password && ( //<div className="signInPage__error">Password is required</div>
         <div className="signInPage__error"><CloseIcon fontSize="small" />
         <span>Password is required</span>
         <ReportProblemRoundedIcon fontSize="small" 
         className="signInPage__reportIcon"
         />
            </div>
         )}
         <div className="signInPage__forgotPassword">
         <Link>Forgot Password? </Link>
               </div>
             </div>
        <button className="signInPage__button" type="submit">Sign In</button>
        </form>
      
    </div>
  )
}

export default SignInPage;
