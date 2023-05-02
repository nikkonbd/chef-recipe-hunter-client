import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

const ViewRecipe = () => {
    // const [recipess, setRecipes] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:5000/chef`)
    //         .then(res => res.json())
    //         .then(data => setRecipes(data))
    // }, [])
    // console.log(recipess);

    const recipe = useLoaderData();
    const { image_url, author, details, recipes, rating } = recipe;
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
                            <p><strong>Likes: </strong>{rating.Likes}</p>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ViewRecipe;