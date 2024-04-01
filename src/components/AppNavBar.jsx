import React from 'react';
import {Container, Nav, Navbar, NavLink} from "react-bootstrap";
import validationHelper from "../utility/ValidationHelper.js";
import logo from "../assets/images/Logo-of-SafeSyntax.png"

const AppNavBar = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-body-tertiary shadow-lg mb-5">
                <Container fluid>
                    <Navbar.Brand href="#">
                        <img alt="logo" className="" src={logo}/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <NavLink className="nav-link" to="/">Home </NavLink>
                            {
                                validationHelper.isLogin()&&
                                <NavLink className="nav-link" to="/cart-list">Cart List</NavLink>
                            }
                        </Nav>
                        {
                            validationHelper.isLogin() ? (
                                <button className='btn btn-danger'>Logout</button>
                            ) : <button className='btn btn-success'>Login</button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default AppNavBar;