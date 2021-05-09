import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import './DashboardPage.css';

function DashboardPage(props) {
    return (
        <div className="p-home">
           <Row>
                <Col className="box50">
                    <h3>New Reported Issues</h3>
                </Col>
                <Col className="box50">
                    <h3>Overdue Issues</h3>
                    <div>There are no overdue issues</div>
                </Col>
           </Row>
           <Row>
                <h3>Active Voting Percentage</h3>
           </Row>
        </div>
    );
}

export default DashboardPage;