import React from 'react';
import { Redirect } from 'react-router';

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