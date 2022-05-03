import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useProducts from '../../CustomHook/useProducts';

const Update = () => {
    const [products, setProducts] = useProducts();
    const [product, setProduct] = useState({});
    const [relode, setRelode] = useState(false);
    const { id } = useParams();
    const { img, _id, name, price, quantity, supplier, description } = product;

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                setRelode(!relode)
            })
    }, [id, relode]);

    const handleQuantity = event => {
        event.preventDefault();
        const newQuantity = event.target.name.value;
        if (newQuantity !== '') {
            const addQuantity = (quantity) + parseInt(newQuantity);

            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ addQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    event.target.reset();
                })
        }
    }

    const handleReduce = (product) => {
        const exist = products.find(pd => pd._id === product._id)
        if (exist && exist.quantity >= 1) {
            // const rest = products.filter(pd => pd._id !== product._id);
            // exist.quantity = exist.quantity - 1;
            // setProduct([...rest, exist])
            exist.quantity = exist.quantity - 1;
            const setQuantity = exist.quantity;

            const url = `http://localhost:5000/product/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ setQuantity })
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }



    return (
        <div className='container py-3'>
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <Card className='p-3 text-center'>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Supplier: {supplier}</ListGroupItem>
                            <ListGroupItem>Id: {_id}</ListGroupItem>
                            <ListGroupItem>Price: ${price}</ListGroupItem>
                            <ListGroupItem>Quantity: {quantity}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <button onClick={() => handleReduce(product)} className='btn btn-primary fw-bold'>Deliver</button>
                        </Card.Body>
                        <form onSubmit={handleQuantity}>
                            <input className='border-1 pl-2 py-1' type="text" name="name" id="" placeholder='Add New Quantity' />
                            <input className='btn btn-success fw-bold' type="submit" value="Add" />
                        </form>
                    </Card>
                </div>
            </div>
            <button className='my-5 mx-auto d-block'>
                <Link to='/manageitem' className='text-decoration-none rounded bg-blue-700 text-xl p-2 text-white fw-bold'>Manage Inventory</Link>
            </button>
        </div>
    );
};

export default Update;