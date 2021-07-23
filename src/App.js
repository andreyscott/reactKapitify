import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/index';
import HomePage from './pages/home-page/Homepage';
import SignUp from './pages/sign-up/SignUp';
import SignIn from './pages/sign-in/Sign-In'


import './App.css';

function App() {
    return (
      <div>
      <Navbar />
     <Switch>
       <Route exact path='/' component={HomePage} />
       <Route path ='/test' component={SignUp}  />
       <Route path ='/login' component={SignIn}  />

       
     </Switch>
  
      </div>
  );
}

export default App;

