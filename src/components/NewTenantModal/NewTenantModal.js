import React, {useEffect, useState } from 'react';
import { Button, Modal, Form, Col, Row, Image, Spinner } from 'react-bootstrap';
import './NewTenantModal.css'
import { Redirect } from 'react-router';
import avatar from '../../img/avatar.png'

function NewTenantModal({userId, show, onClose, onCreate, onUpdate, status, uptenant} ) {

    const id = userId && uptenant ? uptenant.id : undefined

    const [email, setEmail] = useState(id ? uptenant.email : '');
    const [pwd, setPwd] = useState(id ? uptenant.pwd : '')
    const [name, setName] = useState(id ? uptenant.name : '');
    const [apartment, setApartment] = useState(id ? uptenant.apartment : '');
    const [img, setImg] = useState(id ? uptenant.img : avatar);
    
    let location = window.location.href.split('/') ;
    let href =location[location.length-1];
    let hide=false
    if(href !=="tenants"){hide=true}
    console.log("NewTenantModal " +href);

     useEffect(() => {
        if(uptenant){
            setEmail(uptenant.email);
            setPwd(uptenant.pwd )
            setName(uptenant.name );
            setApartment(uptenant.apartment);
            setImg(uptenant.img);
            console.log(email,pwd, name, apartment, img)
        }else{
            setEmail("");
            setPwd("")
            setName("");
            setApartment("");
            setImg("");
        }
    }, [uptenant])
        
         
    
    
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
    function updateTenant() {
        let role =false;
        let id = uptenant.id;
        let image ="";
        if(img){
            image=URL.createObjectURL(img)
        }
        onUpdate(id, name, apartment, email, pwd, role, img ? URL.createObjectURL(img) : "", userId);
        clearForm();
        uptenant=null;
        onClose();
    }


    function handleFileChange(e) {
        if (e.target.files.length === 1) {
            setImg(e.target.files[0]);
        } else {
            setImg(avatar);
        }
    }

    function showform() {
        show();
        
    }


    return (   
    <Modal show={show} onHide={onClose} size="lg" className="c-new-recipe">
        <Modal.Header > 
            <Modal.Title>  {status ? 'Update Tenant' : 'New Tenant'}</Modal.Title>
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
                    {/* <Image src={img ? URL.createObjectURL(img) : avatar}/> */}
                    {(img && typeof img === 'object')?
                    <Image  src={ URL.createObjectURL(img) }/>
                    :
                    <Image src={img ? img : avatar}/>}
            </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button  variant="secondary" onClick={onClose}>Cancel </Button>
            <Button  variant="primary" onClick={status ? updateTenant : createTenant}> {status ? 'Update Tenant' : 'Create Tenant'}  </Button> 

        </Modal.Footer>
    </Modal>
    
    );
}

// {status? <LogoutButton onClick={this.handleLogoutClick} />: <LoginButton onClick={this.handleLoginClick} />}

export default NewTenantModal;