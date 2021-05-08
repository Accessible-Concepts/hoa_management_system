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
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

    if (activeUser) {
        return <Redirect to="/dashboard"/>
    }

    async function signup(e) {
        e.preventDefault();
       
        if(fname.length > 0  && lname.length > 0  && email.length > 0  && pwd.length > 0 ){
        let role =true;
        let id = activeCommittees.id
        let newUser=new onNewUser(id, fname, lname, email, pwd, role);
        
        }
        else{
            setShowSignupError(true);
        }
        
    }

  


    return (<>
        <h1>Create a Committee</h1>
        <div className="p-signup">
            
            <p>Please fill the follwoing detais</p>
            {showSignupError ? <Alert variant="danger">Error in Sign Up!</Alert> : null}
            <Form onSubmit={signup}>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label>First Name of Committee Member</Form.Label>
                    <Form.Control type="text" placeholder="First Name" value={fname} onChange={e => setFname(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Last Name of Committee Member</Form.Label>
                    <Form.Control type="text" placeholder="Last Name" value={lname} onChange={e => setLname(e.target.value)} />
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