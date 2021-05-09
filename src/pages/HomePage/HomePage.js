import React from 'react';
import { Container, Button, Card, Row, Col } from 'react-bootstrap';
import './HomePage.css';
import img_1 from '../../img/1.jpg'
import img_2 from '../../img/22.jpg'
import img_3 from '../../img/33.jpg'

function HomePage(props) {
    return (
        <>
            <Container>
                <header>		
                    <h2>HOA System, is an all-in-one management tool comprised of an online contact database, communications system (email), finance & payment system, event platform, and more.</h2>
                </header> 
            </Container>
            <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header> <Card.Img variant="top" src={img_1} /></Card.Header>              
                                <Card.Body>
                                    <Card.Title>Managers Who Truly Care</Card.Title>
                                        <Card.Text>
                                            At HOA System, we genuinely understand<br/>
                                            how much you care about your community.<br/> 
                                            We focus on providing a custom-tailored level<br/>
                                            of service in order to give you and your community<br/>
                                            exactly the kind of management experience that you expect.
                                        </Card.Text> 
                                </Card.Body>
                                <Card.Footer className="text-muted text-center"><Button variant="primary">Learm more</Button></Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header> <Card.Img variant="top" src={img_2} /></Card.Header>
                                <Card.Body>
                                    <Card.Title>High-Rise Buildings</Card.Title>
                                    <Card.Text> 
                                        Streamline package and visitor processing<br/>
                                        Real time text or email notification<br/>
                                        No hardware needed
                                    </Card.Text> 
                                    
                                </Card.Body>
                                <Card.Footer className="text-muted text-center"><Button variant="primary">Learm more</Button></Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header> <Card.Img variant="top" src={img_3} /></Card.Header>
                                <Card.Body>
                                    <Card.Title>Communities & HOAs</Card.Title>
                                    <Card.Text>
                                        Create a professional web presence<br/>
                                        Improve communication & access to information<br/>
                                        Collect dues (or assessment) via web, phone, text
                                    </Card.Text>               
                                </Card.Body>
                                <Card.Footer className="text-muted text-center"><Button variant="primary">Learm more</Button></Card.Footer>
                            </Card>
                    </Col>
                    </Row>    
                    
            </Container>
        </>
    );
}

export default HomePage;