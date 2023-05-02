import React, { useEffect, useState } from 'react';
import Slide from '../Components/Slide';
import ChefCard from '../Components/ChefCard/ChefCard';
import { Container } from 'react-bootstrap';
import recipe1 from '../../public/slide2.jpg'
import recipe2 from '../../public/slide3.jpg'
import recipe3 from '../../public/slide4.jpg'
import recipe4 from '../../public/slide5.jpg'
import recipe5 from '../../public/slide6.jpg'

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Slide></Slide>
            <div className='text-center my-5'>
                <h2>Recipe Categories</h2>
                <p>Choose a Category</p>
            </div>
            <Container className='d-flex justify-content-between'>
                <div>
                    <img style={{ width: '200px', height: '200px' }} className='recipe-img' src={recipe1} alt="" />
                </div>
                <div>
                    <img style={{ width: '200px', height: '200px' }} className='recipe-img' src={recipe2} alt="" />
                </div>
                <div>
                    <img style={{ width: '200px', height: '200px' }} className='recipe-img' src={recipe3} alt="" />
                </div>
                <div>
                    <img style={{ width: '200px', height: '200px' }} className='recipe-img' src={recipe4} alt="" />
                </div>
                <div>
                    <img style={{ width: '200px', height: '200px' }} className='recipe-img' src={recipe5} alt="" />
                </div>
            </Container>
            <div className='my-5'>
                <h2 className='text-center'>Our Available Chef</h2>
                <p className='text-center'>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
            </div>

            <div className='card-container mx-auto'>
                {
                    chefs.map(chef => <ChefCard
                        key={chef._id}
                        chef={chef}
                        chefs={chefs}
                    ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default Home;