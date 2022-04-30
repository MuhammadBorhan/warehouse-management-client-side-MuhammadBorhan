import React from 'react';
import { Link } from 'react-router-dom';

const Update = () => {
    return (
        <div>
            <p>This is update page</p>
            <button className='my-5 mx-auto d-block'>
                <Link to='/manageinventory' className='text-decoration-none rounded bg-blue-700 text-xl p-2 text-white fw-bold'>Manage Inventory</Link>
            </button>
        </div>
    );
};

export default Update;