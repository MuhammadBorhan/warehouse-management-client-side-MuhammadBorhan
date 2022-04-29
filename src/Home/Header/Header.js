import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ActiveLink from '../../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <div className='sticky-top'>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand className='text-white fs-2' as={Link} to='/'>Laptop Invoice</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link className='text-white text-xl' as={ActiveLink} to='/home'>Home</Nav.Link>
                        <Nav.Link className='text-white text-xl' as={ActiveLink} to='/login'>Login</Nav.Link>
                        <Nav.Link className='text-white text-xl' as={ActiveLink} to='/register'>Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;