import React, {useEffect, useState } from 'react';
import { Button, Modal, Form, Col, Row, Image } from 'react-bootstrap';
import './NewMessageModal.css'
//import { Redirect } from 'react-router';
import avatar from '../../img/message.png'

        

function NewMessageModal({activeUser, show, onClose, onCreate, onUpdate, status, upmessage} ) {

    const id = activeUser.userId && upmessage ? upmessage.id : undefined

    const [title, setTitle] = useState(id ? upmessage.title : '');
    const [detailse, setDetailse] = useState(id ? upmessage.detailse : '')
    const [priority, setPriority] = useState(id ? upmessage.priority : '');
    const [img, setImg] = useState(id ? upmessage.img : avatar);

     useEffect(() => {
        if(upmessage){
            setTitle(upmessage.title );
            setDetailse(upmessage.detailse);
            setPriority(upmessage.priority);
            setImg(upmessage.img);
          
        }else{
            setTitle("");
            setDetailse("")
            setPriority("");
            setImg("");
        }
    }, [upmessage])
        
         
    
    
    function clearForm() {
        setTitle("");
        setDetailse("")
        setPriority("");
        setImg(null);
    }


    function createMessage() { 
        let today = new Date();
        let createdAt=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();
        onCreate(activeUser.userId, activeUser.id, createdAt,  title, detailse,  img ? URL.createObjectURL(img) : "", priority, "", true );
        clearForm(); 
        onClose();
    }
    function updateMessage() {
        let today = new Date();
        let createdAt=today.getDate() + "/"+ parseInt(today.getMonth()+1) +"/"+today.getFullYear();
        let id = upmessage.id;
        let image ="";
        // if(img){
        //     image=URL.createObjectURL(img)
        // }
        onUpdate(id, activeUser.userId, activeUser.id, createdAt, title, detailse,  img ? URL.createObjectURL(img) : "", priority, "", true);
        clearForm();
        upmessage=null;
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
            <Modal.Title>  {status ? 'Update Message' : 'New Message'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="formGridFirstName">
                        <Form.Label> Message title</Form.Label>
                         <Form.Control type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Message  Priority</Form.Label>
                        <select  value={priority}  onChange={(e) => setPriority(e.target.value)} className="form-control rounded">      
                            <option value="1">Information</option>
                            <option value="0">Important</option>
                        </select>
                    </Form.Group>
                    
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Message detailse</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Detailse" value={detailse} onChange={e => setDetailse(e.target.value)}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group as={Row} controlId="formHorizontalImg">
                        <Form.Label column sm={3}>
                         Image
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
            <Button variant="secondary" onClick={onClose}>Cancel </Button>
           <Button variant="primary" onClick={status ? updateMessage : createMessage}> {status ? 'Update Message' : 'Create Message'}  </Button> 



        </Modal.Footer>
    </Modal>
    
    );
}

// {status? <LogoutButton onClick={this.handleLogoutClick} />: <LoginButton onClick={this.handleLoginClick} />}

export default NewMessageModal;