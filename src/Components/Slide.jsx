import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../public/slide1.jpg'
import slide2 from '../../public/slide2.jpg'
import slide3 from '../../public/slide3.jpg'
import slide4 from '../../public/slide4.jpg'
import slide5 from '../../public/slide5.jpg'
import slide6 from '../../public/slide6.jpg'
import './Slide.css'

const Slide = () => {
    return (
        <Carousel className=''>
            <Carousel.Item className='img-container'>
                <img style={{ height: '80vh' }}
                    className="d-block w-100 img-fluid"
                    src={slide2}
                    alt="First slide"
                />
                <Carousel.Caption className='mb'>
                    <h3>Ultimate Cheese Burger</h3>
                    <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '80vh' }}
                    className="d-block w-100"
                    src={slide1}
                    alt="Second slide"
                />
                <Carousel.Caption className='mb'>
                    <h3>Raspberry Tartlet</h3>
                    <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '80vh' }}
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
                <Carousel.Caption className='mb'>
                    <h3>Chicken Tikka Masala</h3>
                    <p>
                        A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '80vh' }}
                    className="d-block w-100"
                    src={slide4}
                    alt="Third slide"
                />
                <Carousel.Caption className='mb'>
                    <h3>Raspberry Tartlet</h3>
                    <p>
                        A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '80vh' }}
                    className="d-block w-100"
                    src={slide5}
                    alt="Third slide"
                />
                <Carousel.Caption className='mb'>
                    <h3>Baked Chicken Breast</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '80vh' }}
                    className="d-block w-100"
                    src={slide6}
                    alt="Third slide"
                />
                <Carousel.Caption className='mb'>
                    <h3>Raspberry Tartlet</h3>
                    <p>
                        A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slide;