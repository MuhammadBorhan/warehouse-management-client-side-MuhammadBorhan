import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';
import auth from '../../Firebase/Firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignout = () => {
        signOut(auth)
    }
    return (
        <div className='sticky-top'>

            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='text-white fs-2' as={Link} to='/'>Laptop Invoice</Navbar.Brand>
                    <Navbar.Toggle className='border' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto text-center">
                            <Nav.Link className='text-white text-xl' as={ActiveLink} to='/home'>Home</Nav.Link>
                            <Nav.Link className='text-white text-xl' as={ActiveLink} to='/blogs'>Blogs</Nav.Link>

                            {
                                user ? <>
                                    <Nav.Link className='text-white text-xl' as={ActiveLink} to='/manageitem'>Manage-Item</Nav.Link>
                                    <Nav.Link className='text-white text-xl' as={ActiveLink} to='/additem'>AddItem</Nav.Link>
                                    <Nav.Link className='text-white text-xl' as={ActiveLink} to='/myitems'>MyItems</Nav.Link>
                                    <Nav.Link onClick={handleSignout} className='text-white text-xl'>Logout</Nav.Link>
                                </> : <Nav.Link className='text-white text-xl' as={ActiveLink} to='/login'>LogIn</Nav.Link>
                            }

                            <Nav.Link className='text-white text-xl' as={ActiveLink} to='/register'>Register</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;