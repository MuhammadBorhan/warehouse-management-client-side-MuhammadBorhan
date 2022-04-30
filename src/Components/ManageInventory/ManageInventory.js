import React from 'react';
import useProducts from '../../CustomHook/useProducts';
import SingleInventory from '../SingleInventory/SingleInventory';

const ManageInventory = () => {
    const [products] = useProducts();
    return (
        <div className='container py-4'>
            <h3 className='text-center mb-4'>Total Products:{products.length}</h3>
            <div className="row">
                <div className="col-12">
                    {
                        products.map(product => <SingleInventory key={product._id} product={product}></SingleInventory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ManageInventory;