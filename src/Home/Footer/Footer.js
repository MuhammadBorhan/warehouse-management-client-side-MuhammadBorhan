import React from 'react';

const Footer = () => {
    const date = new Date();
    const getYear = date.getFullYear();
    return (
        <div className='text-center py-3 bg-dark'>
            <p className='text-white'>Copyright &copy; {getYear} deserved by Borhan</p>
        </div>
    );
};

export default Footer;