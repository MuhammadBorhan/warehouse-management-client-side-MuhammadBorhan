import React from 'react';
import { Link } from 'react-router-dom';

const Update = () => {
    return (
        <div className='container'>
            <h3>This is update page</h3>
            <button className='my-5 mx-auto d-block'>
                <Link to='/manageitem' className='text-decoration-none rounded bg-blue-700 text-xl p-2 text-white fw-bold'>Manage Inventory</Link>
            </button>
        </div>
    );
};

export default Update;