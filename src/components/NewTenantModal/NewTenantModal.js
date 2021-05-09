import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row, Image, Spinner } from 'react-bootstrap';
import './NewTenantModal.css'
import { Redirect } from 'react-router';
import avatar from '../../img/avatar.png'

function NewTenantModal({userId, show, onClose, onCreate} ) {

    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [name, setName] = useState("");
    const [apartment, setApartment] = useState("");
    const [img, setImg] = useState(null);


    function clearForm() {
        setEmail("");
        setPwd("");
        setName("");
        setApartment("");
        setImg(null);
    }

    function createTenant() {
        let role =false;
        onCreate(name, apartment, email, pwd, role, img ? URL.createObjectURL(img) : "", userId);
        clearForm();
        onClose();
    }

    function handleFileChange(e) {
        if (e.target.files.length === 1) {
            setImg(e.target.files[0]);
        } else {
            setImg(null);
        }
    }

    return (   
    <Modal show={show} onHide={onClose} size="lg" className="c-new-recipe">
        <Modal.Header closeButton>
            <Modal.Title>New Tenant</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                    <Form.Label> Tenant Name</Form.Label>
                    <Form.Control type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridLastName">
                    <Form.Label>Tenant Apartment</Form.Label>
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
                        Tenant Image
                        </Form.Label>
                        <Col sm={9}>
                            <Form.Control type="file" accept="image/*" onChange={handleFileChange}/>
                        </Col>
                    </Form.Group>
                    <Image src={img ? URL.createObjectURL(img) : ""}/>
               
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>Cancel </Button>
            <Button variant="primary" onClick={createTenant}> Create Tenant  </Button>
        </Modal.Footer>
    </Modal>
    
    );
}

export default NewTenantModal;