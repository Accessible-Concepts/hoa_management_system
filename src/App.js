
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import SignupPage from './pages/SignupPage/SignupPage';
import SignupuserPag from './pages/SignupPage/SignupuserPag.js';
import TenantsPage from './pages/TenantsPage/TenantsPage.js';


import HaoNavbar from './components/HaoNavbar/HaoNavbar';
import usersJSON from './data/users.json';
import recipesJSON from './data/committee.json';
import UserModel from './model/UserModel';
import CommitteeModel from './model/CommitteeModel';
// import NewHaoModal from './components/NewHaoModal/NewHaoModal';

import { useState } from 'react';

function App() {

  const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  const [committees, setCommittee] = useState(recipesJSON.map(plainCommittee => new CommitteeModel(plainCommittee)));
  const [activeUser, setActiveUser] = useState(null);
  const [activeCommittees, setActiveCommittees] = useState(null);

  const [showNewHaoModal, setShowNewHaoModal] = useState(null); 
  
  function addCommittee( name, address,  city) {
    let id = committees.length+1;
    let newCommittee=new CommitteeModel({id, name, address,  city});
    setCommittee(committees.concat(newCommittee));
    console.log(committees);
    setActiveCommittees(newCommittee);
  }
 

  function addUser( name, apartment, email, pwd, role, img, userId) {
    let id= users[users.length - 1].id + 1;
    const newUser = new UserModel({id, name, apartment, email, pwd, role, img, userId});
    setUsers(users.concat(newUser));
    setActiveUser(newUser);
    console.log(users);
  }  

  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" ><HaoNavbar/><HomePage/></Route>
           <Route exact path="/login"><HaoNavbar/><LoginPage activeUser={activeUser} users={users} onLogin={user => setActiveUser(user)}/></Route> 
          <Route exact path="/signup"><HaoNavbar/><SignupPage  activeCommittees={activeCommittees} onNewCommittee={addCommittee} /></Route>
          <Route exact path="/Signupuser"><HaoNavbar/><SignupuserPag  activeCommittees={activeCommittees} activeUser={activeUser} onLogin={user => setActiveUser(user)}  onNewUser={addUser}/></Route>

          <Route exact path="/dashboard">
            <HaoNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)} />
            <DashboardPage activeUser={activeUser} recipes={activeUser ? users.filter(user => user.userId === activeUser.id) : []}/>     
          </Route>

          <Route exact path="/tenants">
            <HaoNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)} />
            <TenantsPage 
              activeUser={activeUser} 
              tenants={activeUser ? users.filter(user => user.userId === activeUser.userId) : []}   
             />
          </Route>
          
         
        </Switch>
      </HashRouter>
      {/* <NewHaoModal show={showNewHaoModal} onClose={() => setShowNewHaoModal(false)} />*/}
    </> 
  );
}

export default App;
