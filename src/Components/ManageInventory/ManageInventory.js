import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import useProducts from '../../CustomHook/useProducts';
import auth from '../../Firebase/Firebase.init';
import SingleInventory from '../SingleInventory/SingleInventory';

const ManageInventory = () => {
    const [products, setProducts] = useProducts();
    const [user, loading, error] = useAuthState(auth);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `https://cryptic-oasis-35139.herokuapp.com/order/${id}`;
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
                    products.length === 0 ? <p className='text-center mt-4'> <Spinner animation="border" variant="danger" /></p> : products.map(product => <SingleInventory handleDelete={handleDelete} key={product._id} product={product}></SingleInventory>)
                }
            </div>
        </div>
    );
};

export default ManageInventory;