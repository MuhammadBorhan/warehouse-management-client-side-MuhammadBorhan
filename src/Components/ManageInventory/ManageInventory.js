import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../CustomHook/useProducts';
import SingleInventory from '../SingleInventory/SingleInventory';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const rest = products.filter(product => product._id !== id);
                    console.log(rest)
                    setProducts(rest);
                })
        }
    }


    return (
        <div className='container py-4'>
            <div>
                <button className='mb-4 mx-auto d-block'>
                    <Link to='/additem' className='text-decoration-none rounded bg-blue-700 text-xl p-2 text-white fw-bold'>Add New Item</Link>
                </button>
            </div>
            <h3 className='text-center mb-4'>All Manage Items: {products.length}</h3>
            <div className="row">
                {
                    products.map(product => <SingleInventory handleDelete={handleDelete} key={product._id} product={product}></SingleInventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;