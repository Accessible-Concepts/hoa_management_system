import React from 'react';
import { useState } from 'react';
import { Button, Form, Col, Row, Image, Spinner, Alert, Modal,  } from 'react-bootstrap';
import './SignupPage.css';
import UserModel from '../../model/UserModel';
import { Redirect } from 'react-router';
import CommitteeModel from '../../model/CommitteeModel';


function SignupuserPag({ activeCommittees, activeUser, onLogin, onNewUser}) {
    const [showSignupError, setShowSignupError] = useState(false);

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const [apartment, setApartment] = useState("");

    if (activeUser) {
        return <Redirect to="/dashboard"/>
    }

    async function signup(e) {
        e.preventDefault();
       
        if(name.length > 0  && apartment.length > 0  && email.length > 0  && pwd.length > 0 ){
        let role =true;
        let id = activeCommittees.id
        let newUser=new onNewUser(id, name, apartment, email, pwd, role);
        
        }
        else{
            setShowSignupError(true);
        }
        
    }

  


    return (<>
       
        <div className="p-signup">
        <h2>Create a Committee</h2>
            <p>Please fill the follwoing detais</p>
            {showSignupError ? <Alert variant="danger">Error in Sign Up!</Alert> : null}
            <Form onSubmit={signup}>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label> Name of Committee Member</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Apartment of Committee Member</Form.Label>
                    <Form.Control type="text" placeholder="Apartment" value={apartment} onChange={e => setApartment(e.target.value)} />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={pwd} onChange={e => setPwd(e.target.value)} />
                    </Form.Group>
                </Form.Row>
                
                <Button variant="success" type="submit" block> Signup</Button>
            </Form>
        </div>
   </>
      
    );
}

export default SignupuserPag;