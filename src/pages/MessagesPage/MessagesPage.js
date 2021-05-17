import React from 'react';
import { Redirect } from 'react-router';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import './MessagesPage.css';
import MessageAccordion from '../../components/MessageAccordion/MessageAccordion';
import NewMessageModal from '../../components/NewTenantModal/NewTenantModal';
import { useState } from 'react';


function MessagesPage({activeUser, messages, onNewMessage, onDeleteMessage, onUpdateMessage}) {
    const [showNewMessageModal, setShowNewMessageModal] = useState(false);
    const [filter, setFilter] = useState("");
    const [upstutus, setUpStutus] = useState(false);
    const [upmessage, setUpmessage] = useState();

    if (!activeUser) {
        return <Redirect to="/"/>
    }

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

    function sortArray(event){
        const types = {
            createdAt: 'information',
            important: 'important'
        };
        const sortProperty = types[event];

        $: filtermessages = [...messages].sort(function(a, b) {
            
            var nameA = a.priority[sortProperty] // ignore upper and lowercase
            var nameB = b.priority[sortProperty] // ignore upper and lowercase
           
            if (nameA < nameB) {
            return -1;
            }
            if (nameA > nameB) {
            return 1;
            }     
            return 0;
        });

        //setActor(sorted);
}

    return (
        <Container className="p-messages">  
          <div className="heading">
          <br/> 
          <input onChange={e => FilterType(e.target.value)} className="form-control rounded" placeholder = "Filter by text in title and details"></input>
          <div className="title"> 
                 <select  onChange={(e) => FilterType(e.target.value)} className="form-control rounded"> 
                     <option value="-1">Filter by priority</option>         
                     <option value="0">Important</option>
                     <option value="1">Information</option>
                 </select>
             </div> 

             <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                <label class="form-check-label" for="exampleCheck1">Date</label>
            </div>  
          <br/>  
                 <Button variant="link" onClick={() => UpdateStutus()}>New Message</Button>  
            </div>
            
                {filtermessages.map(filtermessage => 
                    <div key={filtermessage.id}>
                         <MessageAccordion 
                            message={filtermessage} 
                            onDelete={onDeleteMessage}
                            onUpdate={onUpdateMessage}
                            show= {setShowNewMessageModal} 
                            Stutus ={setUpStutus}
                            upmessage ={setUpmessage}
                            
                         />   
                    </div>
                )}   
             {/* <NewTenantModal 
                userId ={activeUser.userId} 
                show={showNewTenantModal} 
                onClose={() => setShowNewTenantModal(false)} 
                onCreate={onNewTenant}
                onUpdate={onUpdateTenant}
                status ={upstutus}
                uptenant ={uptenant}
                />   */}
        </Container>
    );
}

export default MessagesPage;