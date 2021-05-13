import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './TenantAccordion.css';
import avatar from '../../img/avatar.png'

function TenantAccordion({tenant, onDelete, onUpdate, show, Stutus, uptenant}) {

    function UpdateStutus (){
        show(true);
        Stutus(true);
        uptenant (Object.assign({}, tenant));
    }

    return (    
        <Accordion className="c-tenant"> 
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {tenant.name}
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body className="card-body">
                        <div>
                             <Card.Img className="avatar-img" variant="top" src={tenant.img? tenant.img : avatar}/>
                        </div>
                        <div>
                            <Card.Text>Name: {tenant.name}</Card.Text>
                            <Card.Text>Email: {tenant.email}</Card.Text>
                            <Card.Text>Apartment: {tenant.apartment}</Card.Text>
                        </div>
                        <div>
                        <Button variant="danger" onClick={() => onDelete(tenant)}>Delete Tenant</Button> 
                        <Button variant="success" onClick={() => UpdateStutus()}>Update Tenant</Button> 
                        </div>
                    </Card.Body>
                   
                        
                </Accordion.Collapse>
            </Card>
                
            </Accordion>  
    );
}

export default TenantAccordion;