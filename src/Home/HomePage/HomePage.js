import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slide1 from '../../../src/images/slider/slide1.jpg';
import slide2 from '../../../src/images/slider/slide2.jpg';
import slide3 from '../../../src/images/slider/slide3.jpg';
import useProducts from '../../CustomHook/useProducts';
import InventoryItems from '../InventoryItems/InventoryItems';
import './HomePage.css';

const HomePage = () => {
    const [products] = useProducts();
    const itemProducts = products.slice(0, 6);
    return (
        <div>
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

            <div className='container pt-4'>
                <h3 className='mb-0 text-center'>Inventory Items</h3>
                <div className="row">
                    {
                        itemProducts.map(product => <InventoryItems key={product._id} product={product}></InventoryItems>)
                    }
                </div>
                <button className='my-5 mx-auto d-block'>
                    <Link to='/manageitem' className='text-decoration-none rounded bg-blue-700 text-xl p-2 text-white fw-bold'>Manage Inventory</Link>
                </button>
            </div>
        </div>
    );
};

export default HomePage;