import React from 'react';
import { Table } from 'react-bootstrap';

const SingleInventory = ({ product }) => {
    const { id, name, price, quantity, supplierName } = product;

    return (
        <Table striped bordered hover>
            <tbody>
                <tr className='text-center'>
                    <td>{id}</td>
                    <td>Pro.Name: {name}</td>
                    <td>Price: {price}</td>
                    <td>Quantity: {quantity}</td>
                    <td>Supp.Name: {supplierName}</td>
                    <td className='text-danger fw-bold cursor-pointer'>Delete</td>
                </tr>
            </tbody>
        </Table>
    );
};

export default SingleInventory;