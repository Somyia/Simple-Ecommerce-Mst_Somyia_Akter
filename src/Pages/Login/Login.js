import React from 'react';
import { Button, Col, Container, Form, Nav, Navbar, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import home from '../../images/home.png';

const Login = () => {
    const navigate = useNavigate();
    return (
        //login area
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#">Ecommerce Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#login">Login</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div className="py-4 my-4">
                <Container>
                    <Row className="d-flex align-items-center justify-content-between">
                        <Col md={6}>
                            <div>
                                <img className="img-fluid" src={home} alt="" />
                            </div>
                        </Col>
                        <Col md={5}>
                            <div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control id="login" type="email" placeholder="Enter email" />

                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button className="my-btn" type="submit" onClick={navigate('/products')}>
                                        Login
  </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Login;