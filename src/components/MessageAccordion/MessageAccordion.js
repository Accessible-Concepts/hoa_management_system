import React from 'react';
import { Accordion, Card, Button, Form } from 'react-bootstrap';
import './MessageAccordion.css';
import avatar from '../../img/message.png'



function MessageAccordion({message, comments,  onDelete, onUpdate, show, Stutus, upmessage}) {

    function UpdateStutus (){
        show(true);
        Stutus(true);
        upmessage (Object.assign({}, message));
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
                                <Card.Text>Detailse: {message.detailse}</Card.Text>
                                <Card.Text>Priority: {message.priority==="1" ? "Information" : "Important"}</Card.Text>
                                
                            </div>
                            <div>
                                <Button variant="danger" onClick={() => onDelete(message)}>Delete Message</Button> 
                                <Button variant="success" onClick={() => UpdateStutus()}>Update Message</Button> 
                            </div>
                        </div>
                        <div className="main">
                        
                        </div>
                   
                    </Card.Body>
                   
                        
                </Accordion.Collapse>
            </Card>
                
            </Accordion>  
    );
}

export default MessageAccordion;