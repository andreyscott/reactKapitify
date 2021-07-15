import React, { useEffect } from 'react';
import Header from './components/header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase/firebase";
import { Fade } from "react-awesome-reveal";
import SignupScreen from "./pages/signUp-page/SignUpPage";
import LoginScreen from "./pages/login-page/Login";
import MenuPage from "./pages/menuPage/MenuPage"
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
      <Route exact path="/">
        <Header />
      </Route>
      <Route exact path="/account/signin">
        {user ? <Redirect to="/menu" /> : <LoginScreen />}
      </Route>
      <Route exact path="/account/create">
        {user ? <Redirect to="/menu" /> : <SignupScreen />}
      </Route>
      <Route exact path="/menu">
        {!user ? (
          <Redirect to="/account/signin" />
        ) : (
          <>
            <Header menuPage />
            <MenuPage />

          </>
        )}
      </Route>
      <Route exact path="/menu/featured">
        <Header />
      </Route>
    </Switch>
  </Router>
</div>
);

}

export default App;
