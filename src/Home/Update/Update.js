import React, { useEffect, useState } from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const Update = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const { img, _id, name, price, quantity, supplierName, description } = product;

    useEffect(() => {
        const url = `http://localhost:5000/update/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const handleReduce = () => {
        console.log('clicked')
    }

    const handleQuantity = (event) => {
        event.preventDefault();
        const addQuantity = event.target.quantity.value;
        const result = parseInt(addQuantity) + quantity;
        console.log(result)
        event.target.reset();
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
                            <ListGroupItem>Price: ${price}</ListGroupItem>
                            <ListGroupItem>Quantity: {quantity}</ListGroupItem>
                            <ListGroupItem>Supplier: {supplierName}</ListGroupItem>
                            <ListGroupItem>Id: {_id}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <button onClick={handleReduce} className='btn btn-primary'>Deliver</button>
                        </Card.Body>
                        <form onSubmit={handleQuantity}>
                            <input className='border-1 pl-2 py-1' type="text" name="quantity" id="" placeholder='Add quantity' />
                            <input className='btn btn-success' type="submit" value="Add" />
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