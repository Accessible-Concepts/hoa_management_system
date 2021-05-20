
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
import commentsJSON from './data/comments.json';
import UserModel from './model/UserModel';
import CommitteeModel from './model/CommitteeModel';
import MessageModel from './model/MessageModel';
import CommentModel from './model/CommentModel';

import { useState } from 'react';

function App() {

  const [users, setUsers] = useState(usersJSON.map(plainUser => new UserModel(plainUser)));
  const [committees, setCommittee] = useState(committeeJSON.map(plainCommittee => new CommitteeModel(plainCommittee)));
  const [messages, setMessages] = useState(messageJSON.map(plainMessage => new MessageModel(plainMessage)));
  const [comments, setComments] = useState(commentsJSON.map(plainComment => new CommentModel(plainComment)));
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
      if(users.length ===0){id =1}else{
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

    function UpdateUser(id, name, apartment, email, pwd, role, img , userId){ 
    var array = [...users];  
    let  userupdate = new UserModel({id, name, apartment, email, pwd, role, img , userId});
    const index = array.findIndex(user => user.id === userupdate.id);

    array[index] = userupdate;
    setUsers(array);

}

      // this.createdBy = plainMessage.createdBy;
        // this.createdAt = plainMessage.createdAt;

  function addMessage(createdBy,  createdAt, title, detailse,  img , priority, comments, status ){
    let id
    if(messages.length ===0){id =1}else{
      id = messages[messages.length - 1].id + 1;
    } 
    const newMessage = new MessageModel({id,  createdBy, createdAt, title, detailse,  img , priority, comments, status});
    setMessages(messages.concat(newMessage));
    console.log(messages);
  }

  function deleteMessage(messagetodelete){
    const confirm = window.confirm(`Are you sure you wish to delete this message"?`)
    if (confirm) {

      var array = [...messages]; 
      array = array.filter(message => message.id !== messagetodelete.id);
      setMessages(array);
    }
    console.log(messages);
  }

  function updateMessage(id, createdBy,  createdAt, title, detailse,  img , priority, comments, status){
    var array = [...messages];  
    let  messageupdate = new MessageModel({id, createdBy,  createdAt, title, detailse,  img , priority, comments, status});
    const index = array.findIndex(message => message.id === messageupdate.id);

    array[index] = messageupdate;
    setMessages(array);
  }
  
        // this.id = plainComment.id;
        // this.messagesid = plainComment.messagesid;   
        // this.createdBy = plainComment.createdBy;
        // this.createdAt = plainComment.createdAt;
        // this.detailse = plainComment.detailse;
        // this.status = plainComment.status;

  function AddComment(messagesid,  createdBy, createdAt, detailse ){
    let id
    if(comments.length ===0){id =1}else{
      id = comments[comments.length - 1].id + 1;
    } 
    const newComment = new CommentModel({id, messagesid,  createdBy, createdAt, detailse});
    setComments(comments.concat(newComment));
    console.log(comments);
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
                messages ={(messages && activeUser) ? messages.filter(
                  message => 
                  message.createdBy === activeUser.userId) : []}
                  comments ={(comments && activeUser) ? comments.filter(
                    comment => 
                    comment.createdBy === activeUser.userId) : []}  
                onNewMessage={addMessage} 
                onDeleteMessage ={deleteMessage} 
                onUpdateMessage={updateMessage} 
                onNewComment={AddComment}
                /></Route>

          
         
        </Switch>
      </HashRouter>
      
    </> 
  );
}

export default App;
