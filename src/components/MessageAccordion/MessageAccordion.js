import React from 'react';
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import './MessageAccordion.css';
import Comments from '../Comments/Comments';
import avatar from '../../img/message.png'
import { useState } from 'react';


function MessageAccordion({activeUser, message, comments,  onDelete, onUpdate, show, Stutus, upmessage, onNewComment}) {
    const [newcomment, setNewcomment] = useState("");

    function UpdateStutus (){
        show(true);
        Stutus(true);
        upmessage (Object.assign({}, message));
    }

    function onKeyUp(event) {
        if (event.key === "Enter") {
            let today = new Date();
            let createdAt=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear(); 
            onNewComment(message.id,  activeUser.id, createdAt, event.target.value)
            event.target.value ="";
            setNewcomment(true)
        }    
      }

    return (    
        <Accordion className="c-message"> 
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {message.title}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="card-body">
                   
                        <div className="main" style={{"borderRight": "solid 5px #3068b0"}}>
                            <div>
                                <Card.Img className="avatar-img" variant="top" src={message.img? message.img : avatar}/>
                            </div>
                            <div>
                                <Card.Text><b>Detailse:</b> {message.detailse}</Card.Text>
                                <Card.Text><b>Priority:</b> {message.priority==="1" ? "Information" : "Important"}</Card.Text>
                                
                            </div>
                            <div>
                                <Button variant="danger" onClick={() => onDelete(message)}>Delete Message</Button> 
                                <Button variant="success" onClick={() => UpdateStutus()}>Update Message</Button> 
                            </div>
                        </div>
                        <div className="main">
                         
                         {comments.map(comment => 
                            <div key={comment.id}>
                                <Comments activeUser={activeUser} comment={comment}/>
                            </div>
                        )}  
                          <textarea style={{"width": "100%"}} id="w3review" name="w3review" rows="3" placeholder="Add Comment" onKeyPress={e => onKeyUp(e)}>
                         
                        </textarea> 
                        </div>
                   
                    </Card.Body>
                   
                        
                </Accordion.Collapse>
            </Card>
                
            </Accordion>  
    );
}

export default MessageAccordion;