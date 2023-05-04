import React, { useContext } from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const naviGate = useNavigate();
    const handleLogout = () => {
        logOut()
            .then(() => {
                naviGate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container className='py-2'>
                    <Navbar.Brand href="#home" className='fw-medium'><Link className='text-decoration-none text-black' to={'/'}><strong>Bangler Chef</strong></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link>
                                <Link className='text-decoration-none' to={"/"}> <strong>Home</strong> </Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link className='text-decoration-none text-black' to={"/blog"}>Blogs</Link>
                            </Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                        {user && <FaUserCircle style={{ fontSize: '2rem', marginRight: '1rem' }}></FaUserCircle>}
                        {
                            user ? <Button onClick={handleLogout} variant="danger">Logout</Button> : <Link className='text-decoration-none' to={"/login"}><Button variant="primary">Login</Button></Link>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;