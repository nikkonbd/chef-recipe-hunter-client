import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { FaBeer, FaGithub, FaGoogle, } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../public/login.jpg'
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('');
    const { user, signIn, googleLogin, githubLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignIn = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
                setError('Wrong Password, Please Provide Correct Password')
            })
            .reset();
    }

    const handleGoogleLogin = (event) => {
        event.preventDefault()
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubLogin = (event) => {
        event.preventDefault()
        githubLogin()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <Container className='p-4 mt-5 d-flex'>
            <div className=''>
                <img className='image-fluid' src={Img} alt="" />
            </div>
            <Form onSubmit={handleSignIn} className=''>
                <h4>Login Your Account!</h4>
                <p className='text-danger'>{error}</p>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Button className='w-100' variant="primary" type="submit">
                    Login
                </Button> <br />
                <p className='mt-2'>Dont't Have An Account ? <Link className='text-decoration-none' to={"/register"}>Register Now</Link></p>
                <Button onClick={handleGoogleLogin} className='w-100 mt-2' variant="outline-primary"><FaGoogle className='me-4'></FaGoogle> Google Sign-In</Button>
                <Button onClick={handleGithubLogin} className='w-100 mt-3' variant="outline-secondary"><FaGithub className='me-4'></FaGithub> Github Sign-In</Button>
            </Form>
        </Container>
    );
};

export default Login;