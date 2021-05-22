import React from 'react';
import { Redirect } from 'react-router';
import { Container, Button, Card, Row, Col, ButtonGroup, Input } from 'react-bootstrap';
// import { Radio, RadioGroup} from 'react-radio-group'
import './MessagesPage.css';
import MessageAccordion from '../../components/MessageAccordion/MessageAccordion';
import NewMessageModal from '../../components/NewMessageModal/NewMessageModal';
import { useState } from 'react';



function MessagesPage({users, activeUser, messages, comments, onNewMessage, onDeleteMessage, onUpdateMessage, onNewComment}) {
    const [showNewMessageModal, setShowNewMessageModal] = useState(false);
    const [filter, setFilter] = useState("");
    const [upstutus, setUpStutus] = useState(false);
    const [upmessage, setUpmessage] = useState();

    if (!activeUser) {
        return <Redirect to="/"/>
    }
//
    let location = window.location.href.split('/') ;
    let href =location[4];
    let hide=false
    if(href !=="messages" || activeUser.role===false){hide=true}
    console.log(href);

    function FilterType(event){
        setFilter(event);
    }

    let filtermessages = (messages, filter) => {
        if (!filter || filter ==="-1") {
            return messages;
        }
        else if (filter ==="0" || filter ==="1") {
            return messages.filter((message) => {
                const priority = message.priority;
                return (priority===filter );    
            });   
        }
        else if ( filter ==="priority") {      
            return messages.sort(function(a, b) {
                var nameA = a[filter] 
                var nameB = b[filter] 
               
                if (nameA < nameB) {
                return -1;
                }
                if (nameA > nameB) {
                return 1;
                }     
                return 0;
            });
        }
        else if (filter ==="createdAt") {
            
            return messages.sort(function(a, b) {          
                var nameA = a[filter] 
                var nameB = b[filter] 
               
                if (new Date (nameA) < new Date(nameB)) {
                return -1;
                }
                if (new Date(nameA) > new Date(nameB)) {
                return 1;
                }     
                return 0;
            });
        }
        else{
            return messages.filter((message) => {
                const title = message.title.toLowerCase();
                const detailse = message.detailse.toLowerCase();
                return (title.includes(filter) || detailse.includes(filter) );    
            }); 
        }
             
    };
   

    $: filtermessages = filtermessages(messages, filter);
   
   function UpdateStutus (){
        setShowNewMessageModal(true)
        setUpStutus(false);
        setUpmessage (false);
    }

  
    return (
        <Container className="p-messages">  
               
             
        <div className={"heading " + (hide ? 'hide' : '')}>
                <input onChange={e => FilterType(e.target.value)} className="form-control rounded" placeholder = "Filter by text in title and details"></input>
                <div className="title"> 
                    <select  onChange={(e) => FilterType(e.target.value)} className="form-control rounded"> 
                        <option value="-1">Filter by priority</option>         
                        <option value="0">Important</option>
                        <option value="1">Information</option>
                    </select>
                </div> 
                <div className="label">Sort By: </div>

               
                <div className="check">
                
                    <div className="form-check">
                        <input  onChange={e => FilterType(e.target.value)} value="createdAt" name="group1" type="radio" className="form-check-input" id="checkDate"/>
                        <label className="form-check-label" htmlFor="checkDate">Date</label>
                    </div>
                    <div className="form-check">
                        <input onChange={e => FilterType(e.target.value)} value="priority" name="group1" type="radio" className="form-check-input" id="checkPriority"/>
                        <label className="form-check-label" htmlFor="checkPriority">Priority</label>
                    </div> 
                  
                 </div> 
                 
            </div>
            
            <Button className={"message-button " + (hide ? 'hide' : '')} variant="link" onClick={() => UpdateStutus()}>New Message</Button> 
            <div className="list">
                    {filtermessages.map(filtermessage => 
                        <div key={filtermessage.id}>
                            <MessageAccordion 
                                users={users}
                                activeUser ={activeUser}
                                message={filtermessage} 
                                comments={comments}
                                onDelete={onDeleteMessage}
                                onUpdate={onUpdateMessage}
                                show= {setShowNewMessageModal} 
                                Stutus ={setUpStutus}
                                upmessage ={setUpmessage}
                                onNewComment={onNewComment}
                            />   
                        </div>
                    )}   
            </div>
                 <NewMessageModal 
                    activeUser ={activeUser} 
                    show={showNewMessageModal} 
                    onClose={() => setShowNewMessageModal(false)} 
                    onCreate={onNewMessage}
                    onUpdate={onUpdateMessage}
                    status ={upstutus}
                    upmessage ={upmessage}
                    />   
        </Container>
    );
}

export default MessagesPage;