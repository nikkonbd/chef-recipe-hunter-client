import React, { useContext } from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Img from '../../public/login.jpg'
import { AuthContext } from '../provider/AuthProvider';


const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleClickRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        createUser(email, password)
            .then((result) => {
                // Signed in 
                const createdUser = result.user;
                console.log(createdUser);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
        form.reset();
    }
    return (
        <Container className='mt-5'>
            {/* <div className='w-100 mx-auto'>
                <img className='w-25' src={Img} alt="" />
            </div> */}
            <div>
                <Form onSubmit={handleClickRegister} style={{ width: '400px' }} className='mx-auto'>
                    <h4>Register Your Account!</h4>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Your Photo Url</Form.Label>
                        <Form.Control type="text" name='photo' placeholder="photo url" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Term & Conditions" />
                    </Form.Group>
                    <Button className='w-100' variant="primary" type="submit">
                        Register
                    </Button> <br />
                    <p className='mt-2'>Already Have An Account ? <Link className='text-decoration-none' to={"/login"}>Login Now</Link></p>
                </Form>
            </div>
        </Container>
    );
};

export default Register;