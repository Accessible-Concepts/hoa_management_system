import React from 'react';
import { Redirect } from 'react-router';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import './DashboardPage.css';


function DashboardPage({activeUser, Tenants, Messages}) {
    if (!activeUser) {
        return <Redirect to="/"/>
    }
    let count=Messages.props.messages.filter(message => message.status===true);
    console.log(count.length)
    return (
        <div className="p-dashboard">
           <Row>      
                <Col className="box50">
                    <h3> Tenants</h3>
                    {Tenants}
                </Col>
                <Col className="box50">
                    <div className="mes_num">
                        <h3>Messages</h3>
                        <div className="smallbox">{count.length}</div>
                    </div>
                    
                   {Messages} 
                </Col>
           </Row>
           <Row style={{flexDirection: "column", "alignContent": "space-around", marginTop: "30px"}}>
                <h3>Overdue Issues</h3>
                <div>There are no overdue issues</div>
           </Row>
        </div>
    );
}

export default DashboardPage;