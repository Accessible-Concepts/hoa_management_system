import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard';
import SignupPage from './pages/SignupPage/SignupPage';
import HaoNavbar from './components/HaoNavbar/HaoNavbar';


import { useState } from 'react';

function App() {
  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" ><HaoNavbar/><HomePage/></Route>
           <Route exact path="/login"><LoginPage /></Route> 
          <Route exact path="/signup"><SignupPage/></Route>
          <Route exact path="/dashboard"><HaoNavbar/><Dashboard/></Route>
          
         
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
