import React, { useEffect, useState } from 'react';
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

            <div className='bg-dark text-white opacity-40 py-3'>
                <div className="container">
                    <h3 className='text-center w-48 mx-auto py-2 text-warning fw-bold border-b-2'>More Details</h3>
                    <div className="row">
                        <div className="col-12 col-md-3 text-center">
                            <p className='text-3xl'><span>icon</span></p>
                            <p className='text-5xl'>1400</p>
                            <p className='text-xl'>Laptop Sold</p>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <p className='text-3xl'><span>icon</span></p>
                            <p className='text-5xl'>$149,000</p>
                            <p className='text-xl'>Amount Sold</p>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <p className='text-3xl'><span>icon</span></p>
                            <p className='text-5xl'>100%</p>
                            <p className='text-xl'>Customer Satisfaction</p>
                        </div>
                        <div className="col-12 col-md-3 text-center">
                            <p className='text-3xl'><span>icon</span></p>
                            <p className='text-5xl'>5*</p>
                            <p className='text-xl'>Customer Rating</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className='bg-dark text-white opacity-80 py-3'>
                <div className="container">
                    <h3 className='text-center w-48 mx-auto py-2 text-warning fw-bold border-b-2'>News Feed</h3>
                    <div className="row">
                        <div className="col-12 col-md-4 text-center">
                            <p className='text-3xl'>Newsletter</p>
                            <p>By subscribing to our company newsletter you will always be up-to-date on our latest promotions, deals and vehicle inventory!</p>
                            <form>
                                <input className='rounded px-2' type="text" name="" id="" placeholder='Your Name' />
                                <br />
                                <input className='rounded px-2 my-2' type="email" name="" id="" placeholder='Your Email' />
                                <br />
                                <input className='btn btn-info' type="submit" value="Subscribe" />
                            </form>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <p className='text-3xl'>Latest Post</p>
                            <div>
                                <p>See your message here. Make it compelling to attract other people to read and click on your <a className='text-info' href="/#">http://links</a> to your site.</p>
                                <p>See your message here. Make it compelling to attract other people to read and click on your <a className='text-info' href="/#">http://links</a> to your site.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <p className='text-3xl'>Contact Us</p>
                            <p>Address: 5/27 Mohammadpur, Dhaka, Bangladesh</p>
                            <p>Phone: +801612-345678</p>
                            <p className='text-xl'>Customer Satisfaction</p>
                            <p>Email: <a className=' text-white' href="/">sales@company.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;