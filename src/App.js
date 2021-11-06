import { React, useEffect}from 'react';
import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
 } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomePage from './pages/home/Homepage';
import SignUp from './pages/sign-up/SignUp';
import SignInPage from "./pages/sign-in/signIn";


import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

import './App.css';



function App() {
   const user = useSelector(selectUser);
   const dispatch = useDispatch();

useEffect(() => {
   auth.onAuthStateChanged((userAuth) => {
     if (userAuth) {
       // User is signed in
       dispatch(
         login({
           email: userAuth.email,
           uid: userAuth.uid,
           displayName: userAuth.displayName,
         })
       );
     } else {
       // User is signed out
       dispatch(logout());
     }
   });
 }, [dispatch]);

    return (
        <div className="app">
        <Router>
             <Switch>
                 <Route exact path='/'>
                    <HomePage />
                 </Route>
                 <Route exact path='/account/create'>
                    <SignUp />
                 </Route>
                 <Route exact path="/account/signin">
            {user ? <Redirect to="/menu" /> : <SignInPage/>}
          </Route>
                 <Route exact path='/menu'>
                     <HomePage />
                 </Route>
             </Switch>
         </Router>
        </div>
    );
}

export default App;