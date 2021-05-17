import React from 'react';
import { Redirect } from 'react-router';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import './MessagesPage.css';
import MessageAccordion from '../../components/MessageAccordion/MessageAccordion';
import NewMessageModal from '../../components/NewTenantModal/NewTenantModal';
import { useState } from 'react';


function MessagesPage({activeUser, onNewMessage}) {

    if (!activeUser) {
        return <Redirect to="/"/>
    }

    return (
        <div>
            MessagesPage
        </div>
    );
}

export default MessagesPage;