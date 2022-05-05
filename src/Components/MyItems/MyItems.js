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
        console.log(url)
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
            <h1 className='mt-8'>My Items: {myItems.length}</h1>
            <div className="row">
                {
                    myItems.map(myItem => <div className='col-12'>
                        <table>
                            <td>{myItem.name}</td>
                            <td>{myItem.supplier}</td>
                            <td>{myItem.email}</td>
                            <td> <button onClick={() => handleDelete(myItem._id)} className='text-danger fw-bold'>X</button></td>
                        </table>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MyItems;