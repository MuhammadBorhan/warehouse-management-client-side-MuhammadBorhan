import React from 'react';
import { useForm } from "react-hook-form";

const AddItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, event) => {
        console.log(data);
        const url = `http://localhost:5000/product`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                event.target.reset()
            })
    };
    return (
        <div className='container py-3'>
            <h3 className='mb-4 text-center text-info'>Add your new product collection</h3>
            <div className="row">
                <div className="col-12 col-md-6 mx-auto">
                    <form className='flex flex-column gap-4 border-4 p-3' onSubmit={handleSubmit(onSubmit)}>
                        <input className='border-2 pl-2' type="text"  {...register("slno")} placeholder='Serial no' />
                        <input className='border-2 pl-2' type="text"  {...register("name")} placeholder='Name' />
                        <input className='border-2 pl-2' type="text" {...register("quantity")} placeholder='Quantity' />
                        <input className='border-2 pl-2' type="text" {...register("supplierName")} placeholder='Supplier' />
                        <input className='border-2 pl-2' type="text" {...register("price")} placeholder='price' />
                        <input className='border-2 pl-2' type="text" {...register("img")} placeholder='Photo URL' />
                        <input className='bg-gray-500 text-white px-2 py-1' type="submit" value='Add New' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;