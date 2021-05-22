import React from 'react';
import { Redirect } from 'react-router';
import { Container, Button, Card, Row, Col, ButtonGroup, Input,Image,  Text} from 'react-bootstrap';
import './Comments.css';
import { useState } from 'react';
import avatar from '../../img/avatar.png'

//{activeUser, messages, comments}
function Comments({users, comment}) {  
    const user = users.filter(user => user.id === comment.tenantId);
   // const index = users.findIndex(user => user.id === comment.createdBy);
    return (
        <div className="p-comments">    
            <div className="p-img">
                <Image  variant="top" src={user[0].img ? user[0].img : avatar} roundedCircle/> 
                {user[0].name}  
            </div>                                                          
            <div className="p-text">                  
                <b>Comment: </b> {comment.detailse}           
            </div> 
        </div>
     );
}

export default Comments;