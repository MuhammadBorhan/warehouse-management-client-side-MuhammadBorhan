import React from 'react';
import { Link } from 'react-router-dom';

const InventoryItems = ({ product }) => {
    const { name, price, quantity, img, supplierName, description } = product;
    return (
        <div className="col-md-4 g-4">
            <div className='shadow p-3 text-center'>
                <img className='rounded' src={img} alt="" />
                <p className='mb-0 mt-2'>Name: {name}</p>
                <p className='m-0'>Price:{price}</p>
                <p className='m-0'>Quantity:{quantity}</p>
                <p className='m-0'>Supplier: {supplierName}</p>
                <p>Description:{description}</p>
                <button>
                    <Link className='text-decoration-none text-xl rounded bg-sky-700 text-white fw-bold px-3 py-1 ' to='/update'>Update</Link>
                </button>
            </div>
        </div>
    );
};

export default InventoryItems;