import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import slide1 from '../../../src/images/slider/slide1.jpg';
import slide2 from '../../../src/images/slider/slide2.jpg';
import slide3 from '../../../src/images/slider/slide3.jpg';
import useProducts from '../../CustomHook/useProducts';
import InventoryItems from '../InventoryItems/InventoryItems';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopHouse, faMoneyBill1Wave, faPeopleGroup, faStar, faAddressBook, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';


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
                    <Link to='/manageitem' className='text-decoration-none rounded bg-blue-700 text-xl p-2 text-white fw-bold'>See All Manage Items</Link>
                </button>
            </div>

            <div className='bg-image py-5 mb-3'>
                <div className="container">
                    <div className="row text-white">
                        <div className="col-12 col-md-3 mb-5 mb-md-0 text-center zindexFixed ">
                            <p className='text-4xl text-blue-400'><FontAwesomeIcon icon={faLaptopHouse} /></p>
                            <p className='text-5xl'>1400</p>
                            <p className='text-xl'>Laptop Sold</p>
                        </div>
                        <div className="col-12 col-md-3 mb-5 mb-md-0 text-center zindexFixed">
                            <p className='text-4xl text-rose-200'><FontAwesomeIcon icon={faMoneyBill1Wave} /></p>
                            <p className='text-5xl'>$840,300</p>
                            <p className='text-xl'>Amount Sold</p>
                        </div>
                        <div className="col-12 col-md-3 mb-5 mb-md-0 text-center zindexFixed">
                            <p className='text-4xl text-blue-300'><FontAwesomeIcon icon={faPeopleGroup} /></p>
                            <p className='text-5xl'>100%</p>
                            <p className='text-xl'>Customer Satisfaction</p>
                        </div>
                        <div className="col-12 col-md-3 text-center zindexFixed">
                            <p className='text-4xl text-yellow-400'><FontAwesomeIcon icon={faStar} /></p>
                            <p className='text-5xl'>4.99</p>
                            <p className='text-xl'>Customer Rating</p>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>


            <div className='bg-dark text-white opacity-80 py-3'>
                <div className="container">
                    <h3 className='text-center w-48 mx-auto py-2 text-warning fw-bold border-b-2'>News Feed</h3>
                    <div className="row">
                        <div className="col-12 col-md-4 mb-5 mb-md-0 text-center">
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
                        <div className="col-12 col-md-4 mb-5 mb-md-0 text-center">
                            <p className='text-3xl'>Latest Post</p>
                            <div>
                                <p>See your message here. Make it compelling to attract other people to read and click on your <a className='text-info' href="/#">http://Gmail</a> to your site.</p>
                                <p> See your message here. Make it compelling to attract other people to read and click on your <a className='text-info' href="/#">http://E-mail</a> to your site.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 text-center">
                            <p className='text-3xl'>Contact Us</p>
                            <p> <span> <FontAwesomeIcon icon={faAddressBook} /></span> Address: 5/27 Mohammadpur, Dhaka, Bangladesh</p>
                            <p><span> <FontAwesomeIcon icon={faPhoneAlt} /></span> Phone: +801612-345678</p>
                            <p><span> <FontAwesomeIcon icon={faAddressBook} /></span> Email: <a className=' text-white' href="/">borhan@manager.com</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;