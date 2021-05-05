import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HaoNavbar from './components/HaoNavbar/HaoNavbar';
import usersJSON from './data/users.json';
import recipesJSON from './data/committee.json';
import UserModel from './model/UserModel';
import CommitteeModel from './model/CommitteeModel';

import { useState } from 'react';

function App() {

  const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  const [committee, setCommittee] = useState(recipesJSON.map(plainCommittee => new CommitteeModel(plainCommittee)));
  //const [activeUser, setActiveUser] = useState(users[0]);

    const [activeUser, setActiveUser] = useState(null);

    

  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" ><HaoNavbar/><HomePage/></Route>
           <Route exact path="/login"><LoginPage activeUser={activeUser} users={users} onLogin={user => setActiveUser(user)}/></Route> 
          <Route exact path="/signup"><SignupPage/></Route>
          {/* <Route exact path="/dashboard"><HaoNavbar/><DashboardPage/></Route> */}
          <Route exact path="/dashboard">
            <HaoNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)}/>
            <DashboardPage 
              activeUser={activeUser} 
              recipes={activeUser ? users.filter(user => user.userId === activeUser.id) : []}
             />
          </Route>
          
         
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;
