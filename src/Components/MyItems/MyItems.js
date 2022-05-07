import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';
import './MyItems.css';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/orders?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyItems(data))

    }, [user]);

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
                    const rest = myItems.filter(product => product._id !== id);
                    console.log(rest)
                    setMyItems(rest);
                })
        }
    }

    return (
        <div className='container text-center myItems'>
            <h1 className='mt-2'>My Items: {myItems.length}</h1>
            <div className="row">
                {
                    myItems.map(myItem => <div key={myItem._id} className='col-12 col-md-4 g-4'>
                        <div className='shadow p-3 text-center'>
                            <img className='rounded' src={myItem.img} alt="" />
                            <p className='mb-0 mt-2 fw-bold'>{myItem.name}</p>
                            <p className='my-1'><span className='fw-bold'>Price: </span> ${myItem.price}</p>
                            <p className='m-0'><span className='fw-bold'>Quantity: </span>{myItem.quantity}</p>
                            <p className='my-1'><span className='fw-bold'>Supplier:</span> {myItem.supplier}</p>
                            <p className='mb-2'><span className='fw-bold'>Email:</span> {myItem.email}</p>
                            <p className='font-bold'>{myItem.description}</p>
                            <button onClick={() => handleDelete(myItem._id)} className='px-3 bg-red-600 text-white fw-bold py-1 rounded'>X</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;