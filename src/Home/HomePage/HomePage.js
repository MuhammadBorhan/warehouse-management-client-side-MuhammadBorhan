import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../../../src/images/slider/slide1.jpg';
import slide2 from '../../../src/images/slider/slide2.jpg';
import slide3 from '../../../src/images/slider/slide3.jpg';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item className='slider-img'>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='slider-img'>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item className='slider-img'>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default HomePage;