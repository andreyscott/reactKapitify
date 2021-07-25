import React from 'react';
import { Route, Switch } from 'react-router';
import { Navbar } from './components/navbar/index';
import HomePage from './pages/home-page/Homepage';
import SignUp from './pages/sign-up/SignUp';
import SignIn from "./pages/sign-in/LogIn";



function App() {
    return (
        <div className="app">
             <Navbar />
             <Switch>
                 <Route exact path='/'>
                    <HomePage />
                 </Route>
                 <Route exact path='/test'>
                    <SignUp />
                 </Route>
                 <Route exact path='/log'>
                    <SignIn />
                 </Route>
             </Switch>
        </div>
    );
}

export default App;