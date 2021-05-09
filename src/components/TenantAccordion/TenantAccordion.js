import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './TenantAccordion.css';
import avatar from '../../img/avatar.png'

function TenantAccordion({tenant, onDelete}) {
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
                        <Button variant="link" onClick={() => onDelete(tenant)}>Delete Tenant</Button> 
                        
                    </Card.Body>
                   
                </Accordion.Collapse>
            </Card>
                
            </Accordion>  
    );
}

export default TenantAccordion;