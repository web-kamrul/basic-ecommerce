import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";

const AppNavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary shadow-lg mb-5">
                <Container fluid>
                    <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>
                        </Nav>
                        <button className='btn btn-danger'>Login Now</button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AppNavBar;