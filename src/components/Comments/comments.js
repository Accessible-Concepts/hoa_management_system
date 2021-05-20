import React from 'react';
import { Redirect } from 'react-router';
import { Container, Button, Card, Row, Col, ButtonGroup, Input,Image,  Text} from 'react-bootstrap';
import './Comments.css';
import { useState } from 'react';
import avatar from '../../img/avatar.png'

//{activeUser, messages, comments}
function Comments({activeUser,comment}) {   
    return (
        <div className="p-comments">                                                              
            <Image styly={{"height": "25%"}} variant="top" src={activeUser.img} roundedCircle/>
                <div> 
                    {comment.detailse}
                </div> 
                                    
                            

        </div>
    );
}

export default Comments;