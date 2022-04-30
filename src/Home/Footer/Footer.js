import React from 'react';

const Footer = () => {
    const date = new Date();
    const getYear = date.getFullYear();
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className='text-center py-3 bg-dark'>
                        <p className='text-white'>Copyright &copy; {getYear} deserved by Borhan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;