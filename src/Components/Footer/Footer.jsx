import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './Footer.css'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaRegEnvelope, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer-bg py-5 mt-5'>
            <Container className='footer-container d-flex justify-content-between'>
                <div>
                    <h4 className='h4'>Subscribe</h4>
                    <p className='text-white mt-4'><small>Register and get <br /> notified about all the news & <br /> updates before it gets too late.</small></p>
                    <div className=''>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Button className='mt-2' variant="primary">Sign Up</Button>
                    </div>
                </div>
                <div>
                    <h4 className='h4'>Explore</h4>
                    <div className='mt-4'>
                        <p className='text-white m-0'><small>Browse Recipes</small></p>
                        <p className='text-white m-0'><small>Submit a Recipe</small></p>
                        <p className='text-white m-0'><small>Our Chefs</small></p>
                        <p className='text-white m-0'><small>Latest News</small></p>
                        <p className='text-white m-0'><small>Contact</small></p>
                    </div>
                </div>
                <div>
                    <h4 className='h4'>Latest Recipes</h4>
                    <div className='mt-4'>
                        <p className='text-white m-0'><small>Tart Pecan Pie</small></p>
                        <p className='text-white m-0'><small>Greek Gyro</small></p>
                        <p className='text-white m-0'><small>Tomahawk Steak</small></p>
                        <p className='text-white m-0'><small>Baked Chicken Breast</small></p>
                        <p className='text-white m-0'><small>Tofu and Cheese Pancakes</small></p>
                        <p className='text-white'><small>Chinese Veggie Stir Fry</small></p>
                    </div>
                </div>
                <div>
                    <h4 className='h4'>Contact</h4>
                    <div className='mt-4'>
                        <p className='text-white'><small>787 Mark View Street, <br />
                            New Town, California</small></p>
                        <p className='text-white m-0'><FaRegEnvelope></FaRegEnvelope> <small>needhelp@thatix.com</small></p>
                        <p className='text-white'> <FaPhoneAlt></FaPhoneAlt>  <small>666 888 0000</small></p>
                    </div>
                    <div>
                        <strong><FaFacebook className='text-white me-2'></FaFacebook></strong>
                        <FaTwitter className='text-white me-2'></FaTwitter>
                        <FaInstagram className='text-white me-2'></FaInstagram>
                        <FaYoutube className='text-white'></FaYoutube>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;