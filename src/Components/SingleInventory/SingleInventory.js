import React from 'react';

const SingleInventory = ({ product, handleDelete }) => {
    const { _id, name, img, description, price, quantity, supplier, email } = product;


    return (
        <div className="col-12 col-md-4 g-4">
            <div className='shadow p-3 text-center'>
                <img className='rounded' src={img} alt="" />
                <p className='mb-0 mt-2 fw-bold'>{name}</p>
                <p className='my-1'><span className='fw-bold'>Price: </span> ${price}</p>
                <p className='m-0'><span className='fw-bold'>Quantity: </span>{quantity}</p>
                <p className='my-1'><span className='fw-bold'>Supplier:</span> {supplier}</p>
                <p className='mb-2'><span className='fw-bold'>Email:</span> {email}</p>
                <p className='fw-bold'>{description}</p>
                <button className='px-3 bg-red-600 text-white fw-bold py-1 rounded' onClick={() => handleDelete(_id)}>Delete</button>
            </div>
        </div>
    );
};

export default SingleInventory;