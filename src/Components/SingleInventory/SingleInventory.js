import React from 'react';
import { Table } from 'react-bootstrap';

const SingleInventory = ({ product, handleDelete }) => {
    const { _id, slno, name, price, quantity, supplier } = product;

    return (
        <Table striped bordered hover>
            <tbody>
                <tr className='text-center'>
                    <td>{slno}</td>
                    <td>{name}</td>
                    <td>Price: ${price}</td>
                    <td>Quantity: {quantity}</td>
                    <td>Supplier: {supplier}</td>
                    <td onClick={() => handleDelete(_id)} className='text-danger fw-bold cursor-pointer'>
                        <button>Delete</button>
                    </td>
                </tr>
            </tbody>
        </Table>
    );
};

export default SingleInventory;