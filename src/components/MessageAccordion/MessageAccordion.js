import React from 'react';
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import './MessageAccordion.css';
import Comments from '../Comments/Comments';
import avatar from '../../img/message.png'
import alert from '../../img/alert.png'
import info from '../../img/info.png'
import { useState } from 'react';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

function MessageAccordion({users, activeUser, message, comments,  onDelete, onUpdate, show, Stutus, upmessage, onNewComment}) {
    const [newcomment, setNewcomment] = useState("");

    let location = window.location.href.split('/') ;
    let href =location[location.length-1];
    let hide=false
    if(href !=="messages" || activeUser.role===false){hide=true}
    console.log(href);


    let priority=false;
    if(message.priority=="1"){priority=true}
    function UpdateStutus (){
        show(true);
        Stutus(true);
        upmessage (Object.assign({}, message));
    }

    function onKeyUp(event) {
        if (event.key === "Enter") {
            let today = new Date();
            let createdAt=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear(); 
            onNewComment(message.id,  activeUser.userId, activeUser.id, createdAt, event.target.value) 
            setNewcomment(event.target.value);
            event.target.value ="";
        }    
      }
      function ckeckAcord(event) {

        let today = new Date();
        let createdAt=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();
        let id = message.id;     
        onUpdate(message.id, message.createdBy, message.tenantId, createdAt, message.title, message.detailse,  message.img , message.priority, message.comments, false);     
      }
    return (    
        <Accordion className="c-message"> 
            <Card>
                <Card.Header>
                    <Accordion.Toggle className={"" + (message.status ? "bold" : '')} as={Button} variant="link" eventKey="0" onClick={e => ckeckAcord(e)}>
                    {message.title}
                    </Accordion.Toggle>
                    <Card.Img style= {{"width": "3%", "float": "right"}} variant="top" src={priority?  info : alert} />
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="card-body">
                   
                        <div className="main" style={{"borderRight": "solid 5px #3068b0",  width: "50%"}}>
                            <div>
                                <Card.Img className="avatar-img" variant="top" src={message.img? message.img : avatar}/>
                            </div>
                            <div>
                                <Card.Text><b>Created:</b> {message.createdAt}</Card.Text>
                                <Card.Text><b>Detailse:</b> {message.detailse}</Card.Text>
                                <Card.Text><b>Priority:</b> {message.priority==="1" ? "Information" : "Important"}</Card.Text>
                                
                            </div>
                            <div>
                                <Button className={"" + (hide ? 'hide' : '')} variant="danger" onClick={() => onDelete(message)}>Delete Message</Button> 
                                <Button className={"" + (hide ? 'hide' : '')} variant="success" onClick={() => UpdateStutus()}>Update Message</Button> 
                            </div>
                        </div>
                        <div className="main" style={{  width: "50%"}}>
                         
                         {comments.filter(comment => comment.messagesid ==message.id).map(comment => 
                            <div key={comment.id}>                    
                                <Comments 
                                    // user={users.filter(user => user.id === comment.createdBy)} 
                                    users={users}
                                    comment={comment}/>
                            </div>
                        )}  
                          <textarea  style={{"width": "100%"}} id="w3review" name="w3review" rows="3" placeholder="Add Comment" onKeyPress={e => onKeyUp(e)}>
                          {/* className={"" + (hide ? 'hide' : '')} */}
                        </textarea> 
                        </div>
                   
                    </Card.Body>                
                </Accordion.Collapse>
            </Card>
                
            </Accordion>  
    );
}

export default MessageAccordion;