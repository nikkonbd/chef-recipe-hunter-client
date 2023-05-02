import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './ChefCard.css'
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    // console.log(chef.image_url);
    const { _id, author, recipes, rating } = chef;

    return (
        <div>
            <Container>
                <Card className='mt-4' style={{ width: '100%', }}>
                    <Card.Img className='image' variant="top" src={chef.image_url} />
                    <Card.Body>
                        <Card.Title>{author.name}</Card.Title>
                        <p>Experience: {author.experience}</p>
                        <div className='d-flex justify-content-between'>
                            <p>Recipes: {recipes}</p>
                            <p>Likes: {rating.Likes}</p>
                        </div>
                        <Button variant="primary"><Link className='text-white text-decoration-none' to={`/recipes/${_id}`}>View Recipes</Link></Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    );
};

export default ChefCard;