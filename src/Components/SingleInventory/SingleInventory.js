import React from 'react';
import { Table } from 'react-bootstrap';

const SingleInventory = ({ product }) => {
    const { slno, name, price, quantity, supplierName } = product;

    return (
        <Table striped bordered hover>
            <tbody>
                <tr className='text-center'>
                    <td>{slno}</td>
                    <td>{name}</td>
                    <td>Price: ${price}</td>
                    <td>Quantity: {quantity}</td>
                    <td>Supplier: {supplierName}</td>
                    <td className='text-danger fw-bold cursor-pointer'>Delete</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default SingleInventory;