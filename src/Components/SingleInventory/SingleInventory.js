import React from 'react';
import { Table } from 'react-bootstrap';

const SingleInventory = ({ product, handleDelete }) => {
    const { _id, name, price, quantity, supplier } = product;


    return (
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td>{name}</td>
                    <td>Price: ${price}</td>
                    <td>Quantity: {quantity}</td>
                    <td>Supplier: {supplier}</td>
                    <td onClick={() => handleDelete(_id)} className='text-danger fw-bold cursor-pointer'>
                        <button className='fw-bold'>Delete</button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default SingleInventory;