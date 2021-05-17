
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import SignupPage from './pages/SignupPage/SignupPage';
import SignupUserPage from './pages/SignupPage/SignupUserPage.js';
import TenantsPage from './pages/TenantsPage/TenantsPage.js';
import MessagesPage from './pages/MessagesPage/MessagesPage';


import HaoNavbar from './components/HaoNavbar/HaoNavbar';
import usersJSON from './data/users.json';
import committeeJSON from './data/committee.json';
import messageJSON from './data/Message.json';
import UserModel from './model/UserModel';
import CommitteeModel from './model/CommitteeModel';
import MessageModel from './model/MessageModel';

import { useState } from 'react';

function App() {

  const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  const [committees, setCommittee] = useState(committeeJSON.map(plainCommittee => new CommitteeModel(plainCommittee)));
  const [messages, setMessages] = useState(messageJSON.map(plainMessage => new MessageModel(plainMessage)));
  const [activeUser, setActiveUser] = useState(null);
  const [activeCommittees, setActiveCommittees] = useState(null);
 

  
  
  function addCommittee( name, address,  city) {
      let id = committees.length+1;
      let newCommittee=new CommitteeModel({id, name, address,  city});
      setCommittee(committees.concat(newCommittee));
      console.log(committees);
      setActiveCommittees(newCommittee);
  }
 

  function addUser( name, apartment, email, pwd, role, img, userId) {
      let id
      if(users.length ==0){id =1}else{
        id = users[users.length - 1].id + 1;
      }
      
      const newUser = new UserModel({id, name, apartment, email, pwd, role, img, userId});
      setUsers(users.concat(newUser));
      if(role !==false){
        setActiveUser(newUser);
      }
  }  

  function DeleteUser(usertodelete){   
    const confirm = window.confirm(`Are you sure you wish to delete "${usertodelete.name}"?`)
    if (confirm) {

      var array = [...users];
      array = array.filter(user => user.id !== usertodelete.id);
      setUsers(array);
    }
  }

  function UpdateUser(usertoupdate){ 
    var array = [...users];  
    let  userupdate = new UserModel(usertoupdate);
    const index = array.findIndex(user => user.id === userupdate.id);

    array[index] = userupdate;
    setUsers(array);

}
  function addMessage(){

  }

  function deleteMessage(){

  }

  function updateMessage(){

  }
  



  return (
    <>
      <HashRouter>
        <Switch>
          <Route exact path="/" ><HaoNavbar/><HomePage/></Route>
           <Route exact path="/login"><HaoNavbar/><LoginPage activeUser={activeUser} users={users} onLogin={user => setActiveUser(user)}/></Route> 
          <Route exact path="/Signupuser"><HaoNavbar/><SignupUserPage  activeCommittees={activeCommittees} activeUser={activeUser} onLogin={user => setActiveUser(user)}  onNewUser={addUser}/></Route>
          <Route exact path="/signup"><HaoNavbar/><SignupPage  activeCommittees={activeCommittees} onNewCommittee={addCommittee} /></Route>

          <Route exact path="/dashboard">
            <HaoNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)} />
            <DashboardPage activeUser={activeUser} recipes={activeUser ? users.filter(user => user.userId === activeUser.id) : []}/>     
          </Route>

          <Route exact path="/tenants">
            <HaoNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)} />
            <TenantsPage 
              activeUser={activeUser} 
              tenants={activeUser ? users.filter(user => user.userId === activeUser.userId) : []}   
              onNewTenant={addUser}
              onDeleteTenant={DeleteUser}
              onUpdateTenant={UpdateUser}
             />
          </Route>
          
          <Route exact path="/messages">  <HaoNavbar activeUser={activeUser} onLogout={() => setActiveUser(null)} />
              <MessagesPage  
                activeUser={activeUser} 
                messages ={messages}
                onNewMessage={addMessage} 
                onDeleteMessage ={deleteMessage} 
                onUpdateMessage={updateMessage} 
                /></Route>

          
         
        </Switch>
      </HashRouter>
      
    </> 
  );
}

export default App;
