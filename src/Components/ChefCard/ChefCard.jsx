import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './ChefCard.css'
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ChefCard = ({ chef }) => {
    // console.log(chef.image_url);
    const { _id, author, recipes, rating } = chef;

    const handleToastify = () => {
        toast("Wow Added to Favorite!");
    }

    return (
        <div>
            <Container>
                <Card className='mt-4' style={{ width: '100%', }}>
                    <Card.Img className='image' variant="top" src={chef.image_url} />
                    <Card.Body>
                        <Card.Title>{author.name}</Card.Title>
                        <p>Experience: {author.experience}</p>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p>Recipes: {recipes}</p>
                            <p><FaThumbsUp className='text-warning'></FaThumbsUp> {rating.Likes} Likes</p>
                        </div>
                        <div className='d-flex align-items-center justify-content-between'>
                            <Button variant="primary"><Link className='text-white text-decoration-none' to={`/recipes/${_id}`}>View Recipes</Link></Button>
                            <div>
                                <Button onClick={handleToastify} variant="warning" size="sm">Add to Favorite</Button>
                                <ToastContainer />
                            </div>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ChefCard;