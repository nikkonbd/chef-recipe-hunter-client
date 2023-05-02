import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaBeer, FaGithub, FaGoogle, } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Img from '../../public/login.jpg'

const Login = () => {
    return (
        <Container className='p-4 mt-5 d-flex'>
            <div className=''>
                <img className='image-fluid' src={Img} alt="" />
            </div>
            <Form className=''>
                <h4>Login Your Account!</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button> <br />
                <p className='mt-2'>Dont't Have An Account ? <Link className='text-decoration-none' to={"/register"}>Register Now</Link></p>
                <Button className='w-100 mt-2' variant="outline-primary"><FaGoogle className='me-4'></FaGoogle> Google Sign-In</Button>
                <Button className='w-100 mt-3' variant="outline-secondary"><FaGithub className='me-4'></FaGithub> Google Sign-In</Button>
            </Form>
        </Container>
    );
};

export default Login;