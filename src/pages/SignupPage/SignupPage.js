import React from 'react';
import { useState } from 'react';
import { Button, Form, Col, Row, Image, Spinner, Alert, Modal,  } from 'react-bootstrap';
import './SignupPage.css';
import UserModel from '../../model/UserModel';
import { Redirect } from 'react-router';
import CommitteeModel from '../../model/CommitteeModel';


function SignupPage({ activeCommittees, onNewCommittee}) {
    const [showSignupError, setShowSignupError] = useState(false);
    const [cname, setCname] = useState("");
    const [caddress, setCaddress] = useState("");
    const [ccity, setCcity] = useState("");
    

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");

     if (activeCommittees) {
         return <Redirect to="/Signupuser"/>
     }

    async function signup(e) {
        e.preventDefault();
        // validation code is missing here...
        if(cname.length > 0  && caddress.length > 0  && ccity.length > 0  ){
            let role =true;
            let newCommittee=onNewCommittee(cname, caddress,  ccity);      
        }
        else{
            setShowSignupError(true);
        }
        
    }


    // function clearForm() {
    //     setCname("");
    //     setCaddress("");
    //     setCcity("");

    //     setEmail("");
    //     setPwd("");
    //     setFname("");
    //     setLname("");
    // }
    


    return (<>
        
        <div className="p-signup">
             <div> 
                <h2>Create a Committee</h2>
                <p>Please fill the follwoing detais</p>
            </div> 
            {showSignupError ? <Alert variant="danger">Error in Sign Up!</Alert> : null}
            <Form onSubmit={signup}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Committee Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Committee Name" value={cname} onChange={e => setCname(e.target.value)} />
                </Form.Group>
              
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Committee Address" value={caddress} onChange={e => setCaddress(e.target.value)}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Committee City</Form.Label>
                    <Form.Control type="text" placeholder="Enter Committee City" value={ccity} onChange={e => setCcity(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                {/* <Form.Row>
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
                </Form.Row> */}
                
                <Button variant="success" type="submit" block> Next</Button>
            </Form>
        </div>
   </>
      
    );
}

export default SignupPage;