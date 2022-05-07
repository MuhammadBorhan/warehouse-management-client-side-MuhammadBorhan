import React from 'react';
import { Link } from 'react-router-dom';

const InventoryItems = ({ product }) => {
    const { _id, name, price, quantity, img, supplier, description } = product;


    return (
        <div className="col-12 col-md-4 g-4">
            <div className='shadow p-3 text-center'>
                <img className='rounded' src={img} alt="" />
                <p className='mb-0 mt-2 fw-bold'>{name}</p>
                <p className='my-1'><span className='fw-bold'>Price:</span> ${price}</p>
                <p className='m-0'><span className='fw-bold'>Quantity:</span>{quantity}</p>
                <p className='my-1'><span className='fw-bold'>Supplier:</span> {supplier}</p>
                <p className='fw-bold'>{description}</p>
                <button>
                    <Link className='text-decoration-none text-xl rounded bg-sky-700 text-white fw-bold px-3 py-1 ' to={`/product/${_id}`}>Stock Update</Link>
                </button>
            </div>
        </div>
    );
};

export default InventoryItems;