import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { FaThumbsUp } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const ViewRecipe = () => {

    const recipe = useLoaderData();
    console.log(recipe);
    const { image_url, author, details, recipes, rating, recipew } = recipe;
    return (
        <Container>
            <Card className=''>
                <img src={image_url} alt="" />
                <h4 className='pt-3 text-center'>{author.name}</h4>
                <Card.Body>
                    <Card.Text className='text-center'>
                        {details}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                        <p><strong>Experience: </strong>{author.experience}</p>
                        <div className='d-flex gap-4'>
                            <p><strong>Recipes: </strong>{recipes}</p>
                            <p><strong><FaThumbsUp className='text-warning'></FaThumbsUp> </strong>{rating.Likes} Likes</p>
                        </div>
                    </div>
                    <p><strong>All Recipes: </strong>{recipew}</p>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ViewRecipe;