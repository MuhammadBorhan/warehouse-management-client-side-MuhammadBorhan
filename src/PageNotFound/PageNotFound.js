import React from 'react';
import notfound from '../images/notfound/404.jpg';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12 mx-auto notfound">
                    <img src={notfound} alt="" />
                </div>
            </div>
        </div>
    );
};

export default PageNotFound;