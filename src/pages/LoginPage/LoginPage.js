import React, { useState } from 'react';
import { Container, Form, Button, Alert } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import './LoginPage.css'

function LoginPage({activeUser, users, onLogin}) {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [showInvalidLogin, setShowInvalidLogin] = useState(false);

    if (activeUser) {
        return <Redirect to="/dashboard"/>
    }

    function login(e) {
        e.preventDefault();

        let activeUser = null;
        for (const user of users) {
            if (user.login(email, pwd)) {
                activeUser = user;
                break;
            }
        }

        if (activeUser) {
            onLogin(activeUser);
        } else {
            setShowInvalidLogin(true);
        }

    }

    return (
        
        
        <Container>
        <div className="p-login">
            <div> 
                <h2>Login to Committee</h2>
                <p>or <Link to="/signup">create an account</Link></p>
            </div>
            {showInvalidLogin ? <Alert variant="danger">Invalid Credentials!</Alert> : null}
            <Form onSubmit={login}>
            
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                        value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" 
                        value={pwd} onChange={e => setPwd(e.target.value)} />
                </Form.Group>
                <Button variant="success" type="submit" block>
                    Login
                </Button>
               
            </Form>
        </div>
        </Container>
        
    );
}

export default LoginPage;