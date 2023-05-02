import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" className='fw-medium'>Village Cooking Recipe</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link>
                                <Link className='text-decoration-none' to={"/"}>Home</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none' to={"/blog"}>Blogs</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                        <Link className='text-decoration-none' to={"/login"}><FaUserCircle></FaUserCircle> Login</Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;