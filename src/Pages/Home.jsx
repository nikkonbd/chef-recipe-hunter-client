import React, { useEffect, useState } from 'react';
import Slide from '../Components/Slide';
import ChefCard from '../Components/ChefCard/ChefCard';
import { Button, Container } from 'react-bootstrap';
import recipe1 from '../../public/slide2.jpg'
import recipe2 from '../../public/slide3.jpg'
import recipe3 from '../../public/slide4.jpg'
import recipe4 from '../../public/slide5.jpg'
import recipe5 from '../../public/slide6.jpg'
import images from '../../public/images.jpg'
import './Home.css'

const Home = () => {
    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-nikkon1998-gmailcom.vercel.app/chef')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.log(error))
    }, [])

    return (
        <div>
            <Slide></Slide>
            <Container className='discover-container d-flex gap-5 align-items-center'>
                <div>
                    <img className='image-fluid' src={images} alt="" />
                </div>
                <div>
                    <p>Thatix Introduction</p>
                    <h1>Give yourself a lifetime of cooking confidence</h1>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, words which don't look even slightly believable. If you are going to use a passage you need to be sure text.</p>
                    <Button variant="primary">Discover More</Button>
                </div>
            </Container>
            <div className='text-center my-5'>
                <h2>Recipe Categories</h2>
                <p>Choose a Category</p>
            </div>
            <Container className='picture-container d-flex justify-content-between'>
                <div className='image'>
                    <img style={{ width: '200px', height: '200px' }} className='recipe-img' src={recipe1} alt="" />
                </div>
                <div className='image'>
                    <img style={{ width: '200px', height: '200px' }} className='recipe-img' src={recipe2} alt="" />
                </div>
                <div className='image'>
                    <img style={{ width: '200px', height: '200px' }} className='recipe-img' src={recipe3} alt="" />
                </div>
                <div className='image'>
                    <img style={{ width: '200px', height: '200px' }} className='recipe-img' src={recipe4} alt="" />
                </div>
                <div className='image'>
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