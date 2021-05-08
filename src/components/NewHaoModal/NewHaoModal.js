import React, { useState } from 'react';
import { Button, Modal, Form, Col, Row, Image, Spinner } from 'react-bootstrap';
import './NewHaoModal.css'
import { Redirect } from 'react-router';

function NewHaoModal({show, onClose} ) {

    const [cname, setCname] = useState("");
    const [caddress, setCaddress] = useState("");
    const [ccity, setCcity] = useState("");

    function clearForm() {
        setCname("");
        setCaddress("");
        setCcity("");
    }

    function addNewCommittee() {
        
        // addCommittee(cname, caddress, ccity);
        onClose();
        return <Redirect to="/dashboard"/>
    }
    

    

   

    return (
        <Modal show={show} onHide={onClose} size="lg" className="c-new-recipe">
        <Modal.Header closeButton>
            <Modal.Title>New Committee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group as={Row} controlId="formHorizontalName">
                    <Form.Label column sm={3}>Committee Name</Form.Label>
                    <Col sm={9}><Form.Control type="text" placeholder="Committee Name" value={cname} onChange={e => setCname(e.target.value)}/>                
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalDesc">
                    <Form.Label column sm={3}> Committee address </Form.Label>
                    <Col sm={9}> <Form.Control type="text" placeholder="Committee address" value={caddress} onChange={e => setCaddress(e.target.value)}/>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formHorizontalImg">
                    <Form.Label column sm={3}> Committee city </Form.Label>
                    <Col sm={9}> <Form.Control type="text" placeholder="Committee city" value={ccity} onChange={e => setCcity(e.target.value)}/>   </Col>
                </Form.Group>
                
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>Cancel </Button>
            <Button variant="primary"  onClick={addNewCommittee}> Create Committee  </Button>
        </Modal.Footer>
    </Modal>
    );
}

export default NewHaoModal;