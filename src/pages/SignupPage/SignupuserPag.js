import React from 'react';
import { useState } from 'react';
import { Button, Form, Col, Row, Image, Spinner, Alert, Modal,  } from 'react-bootstrap';
import './SignupuserPag.css';
import UserModel from '../../model/UserModel';
import { Redirect } from 'react-router';
import CommitteeModel from '../../model/CommitteeModel';
import avatar from '../../img/avatar.png'


function SignupuserPag({ activeCommittees, activeUser, onLogin, onNewUser}) {
    const [showSignupError, setShowSignupError] = useState(false);

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const [apartment, setApartment] = useState("");
    const [img, setImg] = useState(null);

    if (activeUser) {
        return <Redirect to="/dashboard"/>
    }
    if(!activeCommittees){
        return <Redirect to="/signup"/>
    }

    async function signup(e) {
        e.preventDefault();
       
        if(name.length > 0  && apartment.length > 0  && email.length > 0  && pwd.length > 0 ){
            let role =true;
            let userId = activeCommittees.id
            let newUser=new onNewUser( name, apartment, email, pwd, role, img ? URL.createObjectURL(img) : URL.createObjectURL(avatar), userId);      
        }
        else{
            setShowSignupError(true);
        }
    }

    function handleFileChange(e) {
        if (e.target.files.length === 1) {
            setImg(e.target.files[0]);
        } else {
            setImg(avatar);
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

                <Form.Group as={Row} controlId="formHorizontalImg">
                        <Form.Label column sm={3}>
                            Recipe Image
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange}/>
                        </Col>
                    </Form.Group>
                    <Image src={img ? URL.createObjectURL(img) : ""}/>
                <Button variant="success" type="submit" block> Signup</Button>
            </Form>
        </div>
   </>
      
    );
}

export default SignupuserPag;